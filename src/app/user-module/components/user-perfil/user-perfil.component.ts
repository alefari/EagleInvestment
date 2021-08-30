import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-user-perfil',
  templateUrl: './user-perfil.component.html',
  styleUrls: ['./user-perfil.component.scss']
})
export class UserPerfilComponent implements OnInit {
  usuario: User;
  constructor(private auth: AuthService, private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.auth.usuario.subscribe(res => {
      this.usuario = res;
    })
  }

}
