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
  isLoading: boolean = false;

  constructor(
    private auth: AuthService,
    private storage: AngularFireStorage,
    private usersService: UsersService) {

    }

  ngOnInit(): void {
    this.isLoading = true;
    this.auth.usuario.subscribe(res => {
      this.usuario = res;
      // const ref  = this.storage.ref(`profilePictures/${this.usuario.uid}`)
      const ref  = this.storage.ref(this.usuario.profilePicUrl)
      this.profileUrl = ref.getDownloadURL();
      this.isLoading = false;
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
      roles: this.usuario.roles,
      titulo: this.usuario.titulo,
      profilePicUrl: this.usuario.profilePicUrl,
      apellido: form.value.apellido,
      telefono1: form.value.tlf1,
      telefono2: form.value.tlf2,
      infoAdicional: form.value.infoAdicional,
      pais: form.value.pais,
      estado: form.value.estado,
      ciudad: form.value.ciudad,
    }
    Object.keys(usuarioEditado).forEach(key => usuarioEditado[key] === undefined ? delete usuarioEditado[key] : {});

    if(this.file) {
      console.log("Actualizando foto")
      const filePath = `profilePictures/${this.usuario.uid}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, this.file);
      // this.uploadPercent = task.percentageChanges();
      task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = this.profileUrl =  fileRef.getDownloadURL();
          usuarioEditado.profilePicUrl = filePath;
          console.log(usuarioEditado)
          this.usersService.updateUser(usuarioEditado);
        } )
      )
      .subscribe()
    }
    else {
      this.usersService.updateUser(usuarioEditado);
    }




    //
  }


}
