import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userFb: firebase.User;
  usuario: User;
  constructor(public auth: AngularFireAuth, private authService: AuthService) { }

  ngOnInit(): void {
    this.auth.user.subscribe(user => {
      this.userFb = user;
    })
    this.authService.usuario.subscribe(usuario => {
      this.usuario = usuario
    })
  }

  log() {
    console.log(this.userFb, this.usuario)
  }

}
