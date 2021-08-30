import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // usuario = new BehaviorSubject<User>(null)
  usuario: Observable<User>
  constructor(public auth: AngularFireAuth, private afs: AngularFirestore, public router: Router) {
    this.usuario = this.auth.authState.pipe(
      switchMap(usr => {
        if(usr) {
          return this.afs.doc<User>(`usuarios/${usr.uid}`).valueChanges();
        }
        else {
          return of(null);
        }
      })
    )
  }

  async signUpEmail(email: string, password: string, nombre: string, apellido: string): Promise<string> {
    return this.auth.createUserWithEmailAndPassword(email, password).then(
      credential => {
        this.addNewUserDB(credential.user.uid, credential.user.email, nombre, apellido);
        // const user = new User(
        //   credential.user.uid,
        //   credential.user.email,
        //   nombre,
        //   apellido,
        //   ['user'],
        //   'Usuario'
        // )
        this.router.navigate(['/'])
        return "Success";
      },
      error => {
        throw this.handleError(error.code);
      });
  }

  async loginEmail(email: string, password: string): Promise<string> {
    return this.auth.signInWithEmailAndPassword(email, password).then(
      res => {
        this.router.navigate(['/'])
        return "Success";
      },
      error => {
        throw this.handleError(error.code);
      }
    );
  }

  async loginGoogle() {
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      res => {
        if(res.additionalUserInfo.isNewUser == true) {
          this.addNewUserDB(
            res.user.uid,
            res.additionalUserInfo.profile['email'],
            res.additionalUserInfo.profile['given_name'],
            res.additionalUserInfo.profile['family_name']
          ).then(
            res => console.log(res),
            err => console.log(err)
          )
        }
        this.router.navigate(['/'])
      },
      error => {
        throw this.handleError(error.code)
      }
    )
  }

  public updateSessionUser(uid?: string) {


    console.log(this.usuario);
  }



  private async addNewUserDB(uid: string, email: string, nombre: string, apellido: string) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`usuarios/${uid}`);
      const data = {
      uid: uid,
      email: email,
      nombre: nombre,
      apellido: apellido,
      roles: ['user'],
      titulo: "Usuario"
    }
    userRef.set(data, {merge: true }).catch(err => console.log(err))
  }

  private handleError(errorCode: string): string {
    let errorMessage = null;
        switch (errorCode) {
          case 'auth/weak-password':
            errorMessage = "La contraseña debe tener al menos 6 caracteres.";
          break;

          case 'auth/email-already-in-use':
            errorMessage = "Este email ya está en uso, utilice otra dirección de correo o contacte un administrador.";
          break;

          case 'auth/invalid-email':
            errorMessage = "El email ingresado no es válido, utilice otra dirección de correo.";
          break;

          case 'auth/invalid-email':
          case 'auth/user-not-found':
            errorMessage = "El email ingresado no es válido.";
          break;

          case 'auth/user-disabled':
          case 'auth/too-many-requests':
            errorMessage = "Su usuario ha sido inhabilitado temporalmente, espere unos minutos o contacte un administrador.";
          break;

          case 'auth/wrong-password':
            errorMessage = "Las credenciales ingresadas no coindicen, asegúrese de que son correctas en intente de nuevo.";
          break;

          case 'auth/account-exists-with-different-credential':
            errorMessage = "Ya existe una cuenta con estas credenciales, pruebe iniciar sesión.";
          break;

          case 'auth/cancelled-popup-request':
            errorMessage = "Solo se permite una ventana emergente de inicio de sesión a la vez.";
          break;

          case 'auth/popup-blocked':
            errorMessage = "Se ha bloqueado la ventana emergente de inicio de sesión, por favor habilite las ventanas emergentes en su navegador e intente de nuevo.";
          break;

          case 'auth/popup-closed-by-user':
            errorMessage = "Debe completar el inicio de sesión antes de cerrar la ventana emergente.";
          break;

          default:
            errorMessage = "Se ha encontrado un error, verifique los datos ingresados e intente de nuevo.";
        }
      return errorMessage
  }
}

