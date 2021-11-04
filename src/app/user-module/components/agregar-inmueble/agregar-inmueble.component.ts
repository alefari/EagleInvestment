import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Inmueble } from 'src/app/models/inmueble.model';
import { Pais } from 'src/app/models/pais.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-agregar-inmueble',
  templateUrl: './agregar-inmueble.component.html',
  styleUrls: ['./agregar-inmueble.component.scss']
})
export class AgregarInmuebleComponent implements OnInit {

  constructor(private inmueblesService: InmueblesService,
              public auth: AngularFireAuth,
              private authService: AuthService,
              private storage: AngularFireStorage,
              private router: Router,
              private route: ActivatedRoute,
              private servicioPaises: PaisesService) { }

  usuario: User;
  isHovering: boolean;
  files: File[] = [];
  imageUrls: string[] = [];
  paises: Pais[];

  ngOnInit(): void {
    this.authService.usuario.subscribe(usuario => {
      this.usuario = usuario;
    })
    this.servicioPaises.getPaises().subscribe(paises => {
      this.paises = paises.sort((a, b) => (a.nombre > b.nombre ? 1 : -1))
    })
  }

  onCrearInmueble(form: NgForm) {
    let nuevoInmueble: Inmueble = {...form.value, uidAgente: this.usuario.uid, imagenesURL: this.imageUrls};
    this.inmueblesService.addInmueble(nuevoInmueble);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for(let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

  receiveUrl($event: string) {
    this.imageUrls.push($event);
  }

  removeUrl($event: string) {
    this.storage.refFromURL($event).delete();
    const index = this.imageUrls.indexOf($event);
    if (index > -1) {
      this.imageUrls.splice(index, 1);
    }
  }

  printUrls() {
    console.log(this.imageUrls);
  }

  onCancelar() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  getIndexPais(paisElegido: string) {
    console.log()
    return this.paises.findIndex(pais => pais.nombre == paisElegido)
  }

}
