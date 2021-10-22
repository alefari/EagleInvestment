import { Component, OnInit } from '@angular/core';
import { faBed, faBath, faRuler, faCar } from '@fortawesome/free-solid-svg-icons'
import { Inmueble } from 'src/app/models/inmueble.model';
import { InmueblesService } from 'src/app/services/inmuebles.service';

@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.component.html',
  styleUrls: ['./inmuebles.component.scss']
})
export class InmueblesComponent implements OnInit {
  faBed = faBed;
  faBath = faBath;
  faRuler = faRuler;
  faCar = faCar;
  inmuebles: Inmueble[];

  constructor(private servicioInmuebles: InmueblesService) { }

  ngOnInit(): void {
    this.servicioInmuebles.getInmuebles().subscribe(inmuebles => {
      this.inmuebles = inmuebles.sort((a, b) => (a.zona > b.zona ? 1 : -1))
    })
  }


}
