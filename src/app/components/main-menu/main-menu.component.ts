import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { StringFormat } from '@angular/fire/storage/interfaces';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { SolicitudGeneral } from 'src/app/models/solicitudGeneral.model';
import { SolicitudesService } from 'src/app/services/solicitudes.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  backgroundImageUrl: Observable<string | null>
  selectedService: string = '0';
  sendingSolicitud: boolean = false;
  sentSolicitud: boolean = false;


  constructor(private storage: AngularFireStorage, private solicitudesService: SolicitudesService) {
    // const ref = this.storage.ref('caracas.jpg');
    // this.backgroundImageUrl = ref.getDownloadURL();
   }

  ngOnInit(): void {

  }

  setServiceAndScroll(elId: string, service: string) {
    this.selectedService = service;
    this.scroll(elId);
  }

  scroll(elId: string) {
    let el = document.getElementById(elId)
    const y = el.getBoundingClientRect().top + window.pageYOffset + -77;
    window.scrollTo({top: y, behavior: 'smooth'});
    // el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // el.scrollIntoView(false);
  }

  onHacerSolicitud(form: NgForm) {
    let solicitudGeneral: SolicitudGeneral = {...form.value, tipoSolicitud: "General", estado: "Pendiente"};
    this.sendingSolicitud = true;
    this.solicitudesService.addSolicitudGeneral(solicitudGeneral).then(
      res => {
        this.sendingSolicitud = false;
        this.sentSolicitud = true;
      }
    );
  }

}
