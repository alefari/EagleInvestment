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
  sitekey: string;
  captchaDone: boolean = false;
  constructor(private solicitudesService: SolicitudesService) {
    this.sitekey = '6LfOoyMdAAAAAIC72eI0xWcCOMLMcvkHrosc3D2M';
   }

  ngOnInit(): void {
  }

  enviarFormulario(form: NgForm) {
    let solicitud: Solicitud = {...form.value, pendiente: true, tipoSolicitud: 'Venta', fecha: new Date()}
    this.solicitudesService.addSolicitud(solicitud);
  }

  handleSuccess($event: Event) {
    this.captchaDone = true;
  }

}
