import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Inmueble } from '../models/inmueble.model';

@Injectable({
  providedIn: 'root'
})
export class InmueblesService {

  inmueblesColeccionRef: AngularFirestoreCollection<Inmueble>;
  inmuebles: Observable<Inmueble[]>;

  inmueblesColeccionAgentRef: AngularFirestoreCollection<Inmueble>;
  inmueblesAgent: Observable<Inmueble[]>;

  constructor(private afs: AngularFirestore) {
    this.inmueblesColeccionRef = afs.collection<Inmueble>('inmuebles');
    this.inmuebles = this.inmueblesColeccionRef.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Inmueble;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    )
  }

  getInmuebles() {
    return this.inmuebles;
  }

  getInmueblesAgent(uidAgente: string) {
    this.inmuebles = this.afs.collection<Inmueble>('inmuebles', ref => ref.where('uidAgente', '==', uidAgente))
    .snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Inmueble;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    )
    return this.inmuebles;
  }

  public async addInmueble(inmueble: Inmueble) {
    this.inmueblesColeccionRef.add(inmueble).then(
      res => {
        return true;
      },
      err => {
        throw err;
      }
    )
  }
}
