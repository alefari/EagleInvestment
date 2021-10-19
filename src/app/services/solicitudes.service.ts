import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Solicitud } from '../models/solicitud.model';
import { SolicitudGeneral } from '../models/solicitudGeneral.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  solicitudesColeccionRef: AngularFirestoreCollection<any>;
  solicitudes: Observable<any[]>;

  constructor(private afs: AngularFirestore) {
    this.solicitudesColeccionRef = afs.collection<any>('solicitudes');
    this.solicitudes = this.solicitudesColeccionRef.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    )
  }

  getSolicitudes() {
    return this.solicitudes;
  }

  public async addSolicitud(solicitud: Solicitud) {
    this.solicitudesColeccionRef.add(solicitud).then(
      res => {
        return true
      },
      err => {
        throw err
      }
    )
  }

  public async addSolicitudGeneral(solicitudGeneral: SolicitudGeneral) {
    this.solicitudesColeccionRef.add(solicitudGeneral).then(
      res => {
        return true
      },
      err => {
        throw err
      }
    )
  }

  public async editEstado(idSolicitud: string, nuevoEstado: string) {
    let solicitudDocRef = this.afs.doc<any>(`solicitudes/${idSolicitud}`);
    solicitudDocRef.update({estado: nuevoEstado})
  }

}
