import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // errorMessage: string = null;
  isLoading = false;
  @Output() messageEvent = new EventEmitter();

  constructor(public auth: AngularFireAuth, private afs: AngularFirestore, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLoginEmail(authForm: NgForm) {
    this.messageEvent.emit({
      errorMessage: null,
      isLoading: true
    });
    this.isLoading = true;
    this.authService.loginEmail(
      authForm.value.email,
      authForm.value.password
      ).then(
        res => {
          console.log(res)
          // this.errorMessage = null
          this.messageEvent.emit({
            errorMessage: null,
            isLoading: false
          })
          this.isLoading = false;
        }
      ).catch(
        // err => this.errorMessage = err
        err => {
          this.messageEvent.emit({
            errorMessage: err,
            isLoading: false
          })
        this.isLoading = false;
        }
      );
  }

  onLoginGoogle() {
    this.messageEvent.emit({
      errorMessage: null,
      isLoading: true
    });
    this.isLoading = true;
    this.authService.loginGoogle().then(
      res => {
        // console.log(res)
        this.messageEvent.emit({
          errorMessage: null,
          isLoading: false
        })
        this.isLoading = false;
      }
    ).catch(
      // err => this.errorMessage = err
      err => {
        this.messageEvent.emit({
          errorMessage: err,
          isLoading: false
        })
        this.isLoading = false;
      }

    );
  }

}
