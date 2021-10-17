import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Solicitud } from '../models/solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  solicitudesColeccionRef: AngularFirestoreCollection<Solicitud>;
  solicitudes: Observable<Solicitud[]>;

  constructor(private afs: AngularFirestore) {
    this.solicitudesColeccionRef = afs.collection<Solicitud>('solicitudes');
    this.solicitudes = this.solicitudesColeccionRef.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Solicitud;
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

}
