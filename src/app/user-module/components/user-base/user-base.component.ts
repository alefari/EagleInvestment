import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-base',
  templateUrl: './user-base.component.html',
  styleUrls: ['./user-base.component.scss']
})
export class UserBaseComponent implements OnInit {
  usuario: User;
  loadingUser = true;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.usuario.subscribe(res => {
      this.usuario = res;
      this.loadingUser = false;
    })
  }

}
