import { Component, OnDestroy, OnInit } from '@angular/core';
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
  selector: 'app-editar-inmueble',
  templateUrl: './editar-inmueble.component.html',
  styleUrls: ['./editar-inmueble.component.scss']
})
export class EditarInmuebleComponent implements OnInit, OnDestroy {

  constructor(private inmueblesService: InmueblesService,
              public auth: AngularFireAuth,
              private servicioPaises: PaisesService,
              private storage: AngularFireStorage,
              private route: ActivatedRoute,
              private router: Router,) { }

  // usuario: User;
  isHovering: boolean;
  files: File[] = [];
  imageUrls: string[] = [];
  idInmueble: string;
  inmueble: Inmueble;
  imagenesEliminar: string[] = [];
  dropzoneDirty = false;
  paises: Pais[];

  ngOnInit(): void {
    this.idInmueble = this.route.snapshot.params['id'];
    this.inmueblesService.getInmueble(this.idInmueble).subscribe(inmueble => {
      this.inmueble = {...inmueble};
    })
    this.servicioPaises.getPaises().subscribe(paises => {
      this.paises = paises.sort((a, b) => (a.nombre > b.nombre ? 1 : -1))
    })
    // this.authService.usuario.subscribe(usuario => {
    //   this.usuario = usuario;
    // })
  }

  ngOnDestroy(): void {
    console.log('destroying...')
    if(this.imageUrls.length != 0) {
      this.imageUrls.forEach(url =>{
        this.storage.refFromURL(url).delete();
      })
    }
  }


  // onCrearInmueble(form: NgForm) {
  //   let nuevoInmueble: Inmueble = {...form.value, uidAgente: this.usuario.uid, imagenesURL: this.imageUrls};
  //   this.inmueblesService.addInmueble(nuevoInmueble);
  // }

  onGuardarCambios() {
    this.imagenesEliminar.forEach(url => {
      this.storage.refFromURL(url).delete();
    })
    // this.inmueble.imagenesURL = [...this.inmueble.imagenesURL, ...this.imageUrls];
    if(this.inmueble.imagenesURL) {
      this.inmueble.imagenesURL = this.inmueble.imagenesURL.concat(this.imageUrls);
    }else {
      this.inmueble.imagenesURL = [...this.imageUrls];
    }
    this.imageUrls = [];

    console.log(this.inmueble);
    this.inmueblesService.updateInmueble(this.idInmueble, this.inmueble);
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    this.dropzoneDirty = true;
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

  onEliminarImg(url: string) {
    this.imagenesEliminar.push(url);
    const index = this.inmueble.imagenesURL.indexOf(url);
    if (index > -1) {
      this.inmueble.imagenesURL.splice(index, 1);
    }
    this.dropzoneDirty = true;
  }

  printUrls() {
    console.log(this.inmueble.imagenesURL);
    console.log(this.imageUrls);
  }

  onCancelar() {
    this.imageUrls.forEach(url => {
      this.storage.refFromURL(url).delete();
    })
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  getIndexPais(paisElegido: string) {
    console.log()
    return this.paises.findIndex(pais => pais.nombre == paisElegido)
  }

}
