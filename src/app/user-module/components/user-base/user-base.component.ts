import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
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
  profileUrl: Observable<string | null>;
  constructor(private auth: AuthService, private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.auth.usuario.subscribe(res => {
      this.usuario = res;
      const ref  = this.storage.ref(this.usuario.profilePicUrl)
      this.profileUrl = ref.getDownloadURL();
      this.loadingUser = false;
    })
  }

  onCerrarSesion() {
    this.auth.logout();
  }

}
