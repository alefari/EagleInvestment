import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  // errorMessage: string = null;
  @Output() messageEvent = new EventEmitter();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSignUpEmail(authForm: NgForm) {
    this.messageEvent.emit({
      errorMessage: null,
      isLoading: true
    })
    this.authService.signUpEmail(
      authForm.value.email,
      authForm.value.password,
      authForm.value.nombre,
      authForm.value.apellido
    ).then(
      res => {
        // console.log(res)
        this.messageEvent.emit({
          errorMessage: null,
          isLoading: false
        })
        // this.errorMessage = null
      }
    ).catch(
      err => this.messageEvent.emit({
        errorMessage: err,
        isLoading: false
      })
      // err => this.errorMessage = err
    );
  }

}
