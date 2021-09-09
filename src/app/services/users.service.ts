import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersColeccionRef: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(private afs: AngularFirestore) {
    this.usersColeccionRef = afs.collection<User>('usuarios');
    this.users = this.usersColeccionRef.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    )
  }

  getUsers() {
    return this.users;
  }

  updateUser(updatedUser: User) {
    let userDoc = this.afs.doc<User>(`usuarios/${updatedUser.uid}`);
    userDoc.update(updatedUser).then(
      res => {
      console.log("Actualizado", res);
      },
      err => {
        console.log("ERROR", err)
      }
    )
    .catch(error => {
      console.log(error)
    })
  }
}
