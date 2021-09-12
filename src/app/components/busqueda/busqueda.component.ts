import { Component, OnInit } from '@angular/core';
import { faBed, faBath, faRuler, faCar } from '@fortawesome/free-solid-svg-icons'

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

  constructor() { }

  ngOnInit(): void {
  }


}
