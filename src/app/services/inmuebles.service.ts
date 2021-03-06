import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentData } from '@angular/fire/firestore';
import * as firebase from 'firebase';
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

  inmueblesColeccionFavoritosRef: AngularFirestoreCollection<Inmueble>;
  inmueblesFavoritos: Inmueble[];

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

  deleteInmueble(idInmueble: string) {
    let inmuebleDocRef = this.afs.doc<any>(`inmuebles/${idInmueble}`);
    inmuebleDocRef.delete();
  }

  getInmueblesAgent(uidAgente: string) {
    this.inmueblesAgent = this.afs.collection<Inmueble>('inmuebles', ref => ref.where('uidAgente', '==', uidAgente))
    .snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Inmueble;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    )
    return this.inmueblesAgent;
  }

  // async getFavoritos(userFavoritos: string[]) {
  //   console.log(userFavoritos)
  //   this.inmuebles.subscribe(res => {
  //     this.inmueblesFavoritos = res.filter(inmueble => userFavoritos.includes(inmueble.id))
  //     return this.inmueblesFavoritos;
  //   })
  // }

  public async addInmueble(inmueble: Inmueble) {
    inmueble.activo = 'activo';
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
