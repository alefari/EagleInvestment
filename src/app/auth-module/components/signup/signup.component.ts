import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  errorMessage: string = null;
  constructor(private authService: AuthService) { }

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

}
