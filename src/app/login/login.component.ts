import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: string = null;
  isLogin = true;

  constructor(public auth: AngularFireAuth, private afs: AngularFirestore, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSignUpEmail(authForm: NgForm) {
    this.authService.signUpEmail(
      authForm.value.email,
      authForm.value.password,
      authForm.value.nombre,
      authForm.value.apellido
    ).then(
      res => {
        console.log(res)
        this.errorMessage = null
      }
    ).catch(
      err => this.errorMessage = err
    );
  }

  onLoginEmail(authForm: NgForm) {
    this.authService.loginEmail(
      authForm.value.email,
      authForm.value.password
      ).then(
        res => {
          console.log(res)
          this.errorMessage = null
        }
      ).catch(
        err => this.errorMessage = err
      );
  }

  onLoginGoogle() {
    this.authService.loginGoogle().then(
      res => {
        console.log(res)
        this.errorMessage = null
      }
    ).catch(
      err => this.errorMessage = err
    );
  }

}
