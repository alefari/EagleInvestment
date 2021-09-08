import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private afs: AngularFirestore) { }

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
