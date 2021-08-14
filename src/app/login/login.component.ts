import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: string = null;
  constructor(public auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  onSignUpEmail(authForm: NgForm) {
    this.auth.createUserWithEmailAndPassword(authForm.value.email, authForm.value.password);
  }

  onLoginEmail(authForm: NgForm) {
    this.auth.signInWithEmailAndPassword(authForm.value.email, authForm.value.password).then(
      res => {
        this.errorMessage = null;
        console.log(res)
      },
      error => {
        switch (error.code) {
          case 'auth/invalid-email':
          case 'auth/user-not-found':
            this.errorMessage = "El email ingresado no es válido.";
            break;
          case 'auth/user-disabled':
          case 'auth/too-many-requests':
            this.errorMessage = "Su usuario ha sido inhabilitado temporalmente, espere unos minutos o contacte un administrador.";
            break;
          case 'auth/wrong-password':
            this.errorMessage = "Las credenciales ingresadas no coindicen, asegúrese de que son correctas en intente de nuevo.";
            break;
          default:
            this.errorMessage = "Se ha encontrado un error, verifique sus credenciales e intente de nuevo.";
            break;
        }
      }
    );
  }

  logout() {
    this.auth.signOut();
  }

}
