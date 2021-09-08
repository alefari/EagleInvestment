import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-user-perfil',
  templateUrl: './user-perfil.component.html',
  styleUrls: ['./user-perfil.component.scss']
})
export class UserPerfilComponent implements OnInit {
  usuario: User;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  profileUrl: Observable<string | null>;
  file;

  constructor(
    private auth: AuthService,
    private storage: AngularFireStorage,
    private usersService: UsersService) {

    }

  ngOnInit(): void {
    this.auth.usuario.subscribe(res => {
      this.usuario = res;
      const ref  = this.storage.ref(`profilePictures/${this.usuario.uid}`)
      this.profileUrl = ref.getDownloadURL();
    })
  }

  onSelectFile(event) {
    this.file = event.target.files[0];
  }

  updateUser(form: NgForm) {
    let usuarioEditado: User  = {
      uid: this.usuario.uid,
      email: form.value.email,
      nombre: form.value.nombre,
      apellido: form.value.apellido,
      telefono1: form.value.tlf1,
      telefono2: form.value.tlf2,
      infoAdicional: form.value.infoAdicional,
      pais: form.value.pais,
      estado: form.value.estado,
      ciudad: form.value.ciudad,
    }
    console.log(usuarioEditado)

    console.log(this.file)

    if(this.file) {
      console.log("Actualizando foto")
      const filePath = `profilePictures/${this.usuario.uid}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, this.file);

      this.uploadPercent = task.percentageChanges();
      task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = this.profileUrl = fileRef.getDownloadURL() )
      )
      .subscribe()
    }

    this.usersService.updateUser(usuarioEditado);


    //
  }


}
