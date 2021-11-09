import { Component, OnInit } from '@angular/core';
import { Inmueble } from 'src/app/models/inmueble.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { InmueblesService } from 'src/app/services/inmuebles.service';

@Component({
  selector: 'app-agent-propiedades',
  templateUrl: './agent-propiedades.component.html',
  styleUrls: ['./agent-propiedades.component.scss']
})
export class AgentPropiedadesComponent implements OnInit {

  constructor(private servicioInmuebles: InmueblesService, private authService: AuthService) { }

  usuario: User;
  inmuebles: Inmueble[];

  ngOnInit(): void {
    this.authService.usuario.subscribe(usuario => {
      this.usuario = usuario;
      this.servicioInmuebles.getInmueblesAgent(usuario.uid).subscribe(inmuebles => {
        this.inmuebles = inmuebles;
      });
    })
  }

  toggleActivo(inmueble:Inmueble) {
    let nuevoInmueble = {...inmueble}
    nuevoInmueble.activo = !nuevoInmueble.activo;
    this.servicioInmuebles.updateInmueble(nuevoInmueble.id, nuevoInmueble)
  }



}
