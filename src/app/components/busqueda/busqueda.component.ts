import { Component, OnInit } from '@angular/core';
import { faBed, faBath, faRuler, faCar } from '@fortawesome/free-solid-svg-icons'
import { Inmueble } from 'src/app/models/inmueble.model';
import { InmueblesService } from 'src/app/services/inmuebles.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
  faBed = faBed;
  faBath = faBath;
  faRuler = faRuler;
  faCar = faCar;
  arrayPrueba = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  inmuebles: Inmueble[];

  constructor(private servicioInmuebles: InmueblesService) { }

  ngOnInit(): void {
    this.servicioInmuebles.getInmuebles().subscribe(inmuebles => {
      this.inmuebles = inmuebles.sort((a, b) => (a.zona > b.zona ? 1 : -1))
    })
  }


}
