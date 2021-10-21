import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Inmueble } from 'src/app/models/inmueble.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { InmueblesService } from 'src/app/services/inmuebles.service';

@Component({
  selector: 'app-agregar-inmueble',
  templateUrl: './agregar-inmueble.component.html',
  styleUrls: ['./agregar-inmueble.component.scss']
})
export class AgregarInmuebleComponent implements OnInit {

  constructor(private inmueblesService: InmueblesService, public auth: AngularFireAuth, private authService: AuthService) { }

  usuario: User;
  isHovering: boolean;
  files: File[] = [];
  imageUrls: string[] = [];

  ngOnInit(): void {
    this.authService.usuario.subscribe(usuario => {
      this.usuario = usuario;
    })
  }

  onCrearInmueble(form: NgForm) {
    let nuevoInmueble: Inmueble = {...form.value, uidAgente: this.usuario.uid, imagenesURL: this.imageUrls};
    this.inmueblesService.addInmueble(nuevoInmueble);
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for(let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

  receiveUrl($event) {
    this.imageUrls.push($event);
  }

  printUrls() {
    console.log(this.imageUrls);
  }

}
