import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Solicitud } from 'src/app/models/solicitud.model';
import { SolicitudesService } from 'src/app/services/solicitudes.service';

@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.scss']
})
export class VenderComponent implements OnInit {

  constructor(private solicitudesService: SolicitudesService) { }

  ngOnInit(): void {
  }

  enviarFormulario(form: NgForm) {
    let solicitud: Solicitud = {...form.value, pendiente: true, tipoSolicitud: 'Venta'}
    this.solicitudesService.addSolicitud(solicitud);
  }

}
