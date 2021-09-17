import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  usuarios: User[];
  userDetalles: User = null;
  userDetallesPicUrl: Observable<string | null> = null;
  resetEmailSent: boolean = false;
  resetEmailError: string = null;

  constructor(private usersService: UsersService, private storage: AngularFireStorage, private auth: AuthService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(users => {
      this.usuarios = users.sort((a, b) => (a.nombre > b.nombre ? 1 : -1))
    })
  }

  setUserDetalles(usuario: User) {
    this.userDetalles = usuario;
    const ref  = this.storage.ref(usuario.profilePicUrl)
      this.userDetallesPicUrl = ref.getDownloadURL();
  }

  resetPassword(email: string) {
    this.auth.changePassword(email)
    .then(res => {
      console.log("Success")
      this.resetEmailError = null;
      this.resetEmailSent = true;
    })
    .catch(err => {
      console.log(err)
      this.resetEmailSent = false;
      this.resetEmailError = err;
    })
  }

}
