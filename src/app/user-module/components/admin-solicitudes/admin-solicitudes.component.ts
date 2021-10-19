import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/models/solicitud.model';
import { SolicitudesService } from 'src/app/services/solicitudes.service';

@Component({
  selector: 'app-admin-solicitudes',
  templateUrl: './admin-solicitudes.component.html',
  styleUrls: ['./admin-solicitudes.component.scss']
})
export class AdminSolicitudesComponent implements OnInit {
  solicitudes: Solicitud[] = []
  solicitudDetalles: Solicitud = null;

  constructor(private solicitudesService: SolicitudesService) { }

  ngOnInit(): void {
    this.solicitudesService.getSolicitudes().subscribe(solicitudes => {
      this.solicitudes = solicitudes.sort((a, b) => (a.fecha > b.fecha ? 1 : -1))
    })
  }

  setSolicitudDetalles(sol: Solicitud) {
    this.solicitudDetalles = {...sol};
  }

  marcar() {
    let nuevoEstado = this.solicitudDetalles.estado == 'Resuelto' ? 'Pendiente' : 'Resuelto';
    this.solicitudesService.editEstado(this.solicitudDetalles.id, nuevoEstado);
  }

}
