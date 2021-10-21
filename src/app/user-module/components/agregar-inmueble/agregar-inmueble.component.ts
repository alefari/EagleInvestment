import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Inmueble } from 'src/app/models/inmueble.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import firebase from 'firebase';

@Component({
  selector: 'app-agregar-inmueble',
  templateUrl: './agregar-inmueble.component.html',
  styleUrls: ['./agregar-inmueble.component.scss']
})
export class AgregarInmuebleComponent implements OnInit {

  constructor(private inmueblesService: InmueblesService, public auth: AngularFireAuth, private authService: AuthService) { }

  usuario: User;

  ngOnInit(): void {
    this.authService.usuario.subscribe(usuario => {
      this.usuario = usuario;
    })
  }

  onCrearInmueble(form: NgForm) {
    let nuevoInmueble: Inmueble = {...form.value, uidAgente: this.usuario.uid};
    this.inmueblesService.addInmueble(nuevoInmueble);
  }

}
