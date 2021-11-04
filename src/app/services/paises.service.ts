import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pais } from '../models/pais.model';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  paisesColeccionRef: AngularFirestoreCollection<Pais>;
  paises: Observable<Pais[]>;

  constructor(private afs: AngularFirestore) {
    this.paisesColeccionRef = afs.collection<any>('paises');
    this.paises = this.paisesColeccionRef.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    )
  }

  getPaises() {
    return this.paises;
  }

  updatePais(paisActualizado: Pais) {
    let inmuebleDocRef = this.afs.doc<any>(`paises/${paisActualizado.id}`);
    inmuebleDocRef.update(paisActualizado);
  }

}
