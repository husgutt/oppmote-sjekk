import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Skjema } from './oppmote-skjema/skjema';
import { Observable, from } from 'rxjs';
import { Elev } from './oppmote-skjema/elev';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(private firestore: AngularFirestore) { }

  opprettId() : string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  dateFormat() : string {
    return new Date().toISOString().slice(0,10);
  }

  hentAlleSkjemaer() : Observable<Skjema[]> {
    return this.firestore.collection<Skjema>('skjema').valueChanges();
  }

  hentSkjemaPaDato(dato : string) : Observable<Skjema[]> {
    return this.firestore.collection<Skjema>('skjema', ref => ref.where('dato', '==', dato)).valueChanges();
  }

  lagreSkjema(skjema : Skjema) : void {
    this.firestore.collection<Skjema>('skjema').doc(skjema.id).set(skjema);
  }

  oppdatereSkjema(skjema : Skjema) : void {
    this.firestore.collection<Skjema>('skjema').doc(skjema.id).update(skjema);
  }

  slettSkjema(skjema : Skjema) : void {
    this.firestore.collection<Skjema>('skjema').doc(skjema.id).delete();
  }

  hentAlleElever() : Observable<Elev[]> {
    return this.firestore.collection<Elev>('elev').valueChanges();
  }


}
