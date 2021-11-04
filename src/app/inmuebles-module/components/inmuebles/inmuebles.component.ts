import { Component, OnInit } from '@angular/core';
import { faBed, faBath, faRuler, faCar } from '@fortawesome/free-solid-svg-icons'
import { Inmueble } from 'src/app/models/inmueble.model';
import { Pais } from 'src/app/models/pais.model';
import { User } from 'src/app/models/user.model';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import { PaisesService } from 'src/app/services/paises.service';

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
  usuario: User;
  paises: Pais[];
  filtros = {
    pais: '',
    estado: '',
    ciudad: '',
    inmueble: '',
    operacion: '',
    rangoPrecio: '',
    habitaciones: '',
    banos: '',
  }

  constructor(private servicioInmuebles: InmueblesService,
              private servicioPaises: PaisesService,) { }

  ngOnInit(): void {
    this.servicioInmuebles.getInmuebles().subscribe(inmuebles => {
      this.inmuebles = inmuebles.sort((a, b) => (a.zona > b.zona ? 1 : -1))
    })
    this.servicioPaises.getPaises().subscribe(paises => {
      this.paises = paises.sort((a, b) => (a.nombre > b.nombre ? 1 : -1))
    })

  }

  getIndexPais() {
    console.log()
    return this.paises.findIndex(pais => pais.nombre == this.filtros.pais)
  }

  printFiltros() {
    console.log(this.filtros);
  }

  checkRangoPrecio(precioInmueble: number):boolean {
    switch (this.filtros.rangoPrecio) {
      case '':
        return true
      case 'Menos de $50.000':
        if (precioInmueble <= 50000) return true;
        break;
      case '$50.000 - $100.000':
        if (precioInmueble >= 50000 && precioInmueble <= 100000) return true;
        break;
      case '$100.000 - $150.000':
        if (precioInmueble >= 100000 && precioInmueble <= 150000) return true;
        break;
      case '$150.000 - $200.000':
        if (precioInmueble >= 150000 && precioInmueble <= 200000) return true;
        break;
      case 'Más de $200.000':
        if (precioInmueble >= 200000) return true;
        break;
    }
    return false;
  }

  checkHabitaciones(habsInmueble: number):boolean {
    if(this.filtros.habitaciones == '') {
      return true
    }
    else if(this.filtros.habitaciones == '4' && habsInmueble >= 4) {
      return true
    }
    else if(habsInmueble == +this.filtros.habitaciones) {
      return true
    }
    return false;
  }

  checkBanos(banosInmueble: number):boolean {
    if(this.filtros.banos == '') {
      return true
    }
    else if(this.filtros.banos == '4' && banosInmueble >= 4) {
      return true
    }
    else if(banosInmueble == +this.filtros.banos) {
      return true
    }
    return false;
  }


}
