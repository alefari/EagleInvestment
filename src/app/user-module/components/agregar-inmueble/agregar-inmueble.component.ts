import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-agregar-inmueble',
  templateUrl: './agregar-inmueble.component.html',
  styleUrls: ['./agregar-inmueble.component.scss']
})
export class AgregarInmuebleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onCrearInmueble(form: NgForm) {

  }

}
