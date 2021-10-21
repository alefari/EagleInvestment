import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentData } from '@angular/fire/firestore';
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

  getInmueble(id: string) {
    let itemDoc = this.afs.doc<Inmueble>(`inmuebles/${id}`);
    let inmueble:Observable<any> = itemDoc.valueChanges();
    return inmueble;
  }

  updateInmueble(idInmueble: string, nuevoInmueble: Inmueble) {
    let inmuebleDocRef = this.afs.doc<any>(`inmuebles/${idInmueble}`);
    inmuebleDocRef.update(nuevoInmueble);
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