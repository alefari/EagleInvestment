import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Solicitud } from 'src/app/models/solicitud.model';
import { SolicitudesService } from 'src/app/services/solicitudes.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss']
})
export class ComprarComponent implements OnInit {
  // protected aFormGroup: FormGroup;
  sitekey: string;
  captchaDone: boolean = false;
  sent: boolean = false;

  constructor(private solicitudesService: SolicitudesService) {
    this.sitekey = '6LfOoyMdAAAAAIC72eI0xWcCOMLMcvkHrosc3D2M';
   }

  ngOnInit(): void {
  }

  enviarFormulario(form: NgForm) {
    let solicitud: Solicitud = {...form.value, pendiente: true, fecha: new Date()}
    this.solicitudesService.addSolicitud(solicitud);
    this.sent = true;
  }

  handleSuccess($event: Event) {
    this.captchaDone = true;
  }

}
