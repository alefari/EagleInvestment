import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-base',
  templateUrl: './auth-base.component.html',
  styleUrls: ['./auth-base.component.scss']
})
export class AuthBaseComponent implements OnInit {
  isLogin = true;
  isLoading = false;
  errorMessage:string = null;
  constructor() { }

  ngOnInit(): void {
  }

  recieveMessage($event) {
    this.errorMessage = $event.errorMessage;
    this.isLoading = $event.isLoading;
  }

  onChangeMode() {
    this.isLogin = !this.isLogin;
    this.errorMessage = null;
  }

}
