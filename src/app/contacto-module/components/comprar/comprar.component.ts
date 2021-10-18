import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Solicitud } from 'src/app/models/solicitud.model';
import { SolicitudesService } from 'src/app/services/solicitudes.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss']
})
export class ComprarComponent implements OnInit {

  constructor(private solicitudesService: SolicitudesService) { }

  ngOnInit(): void {
  }

  enviarFormulario(form: NgForm) {
    let solicitud: Solicitud = {...form.value, pendiente: true, tipoSolicitud: 'Compra', fecha: new Date()}
    this.solicitudesService.addSolicitud(solicitud);
  }

}
