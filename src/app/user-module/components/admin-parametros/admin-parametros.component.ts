import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/pais.model';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-admin-parametros',
  templateUrl: './admin-parametros.component.html',
  styleUrls: ['./admin-parametros.component.scss']
})
export class AdminParametrosComponent implements OnInit {
  paises: Pais[];
  paisElegido: Pais = null;
  constructor(private servicioPaises: PaisesService) { }

  ngOnInit(): void {
    this.servicioPaises.getPaises().subscribe(paises => {
      this.paises = paises.sort((a, b) => (a.nombre > b.nombre ? 1 : -1))
    })
  }

  addCiudad(ciudadNueva: string) {
    this.paisElegido.ciudades.push(ciudadNueva);
    this.servicioPaises.updatePais(this.paisElegido);
  }

  addEstado(estadoNuevo: string) {
    this.paisElegido.estados.push(estadoNuevo);
    this.servicioPaises.updatePais(this.paisElegido);
  }

}
