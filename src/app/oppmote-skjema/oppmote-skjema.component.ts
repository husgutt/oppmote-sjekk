import { Component, OnInit } from '@angular/core';

import { Skjema } from './skjema';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'; 
import { Observable, from } from 'rxjs';
import { Elev } from './elev'
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { ToolsService } from '../tools.service';

@Component({
  selector: 'os-oppmote-skjema',
  templateUrl: './oppmote-skjema.component.html',
  styleUrls: ['./oppmote-skjema.component.css']
})
export class OppmoteSkjemaComponent implements OnInit {


  skjema : Skjema;
  observableSkjema : Observable<Skjema[]>;
  observableElever : Observable<Elev[]>;
  valgtSkjemaEksisterer : boolean;
  tempDato : string;
   

  constructor(private firestore: AngularFirestore, private route: ActivatedRoute, private router: Router, private toolservice : ToolsService){
    this.skjema = {
      id : "0",
      dato : "dato",
      elever : [], 
      present :[],
      event : "trening"
    }
  }

  ngOnInit(): void {

    let parameterDato = this.route.snapshot.paramMap.get('id')
    this.valgtSkjemaEksisterer = false;

    //Sjekk om det er en spesiell dato som er valgt    
    if(parameterDato){
      console.log("parameterDato er: " + parameterDato + " <--- ");
      this.skjema.dato = parameterDato;
      
      // Dato er valgt
      // TODO: Sjekke om dato er gyldig. Hvis ugyldig sendes til startside eller noe
      // Prøv å hente dokument på denne datoen
      this.sjekkeOmSkjemaSkalOpprettes(parameterDato);

    }
    else {
      console.log("Dato er ikke valgt, setter dato til dagens");
      // Dato er ikke valgt, setter dato til dagens
      this.skjema.dato = this.toolservice.dateFormat();
      this.sjekkeOmSkjemaSkalOpprettes(this.toolservice.dateFormat());
    }
  }

  color(i : number) : string {
    if(!this.skjema.present[i])
    {
      return "p-3 mb-2 bg-success text-white" ;
    }
    else {
        return "p-3 mb-2 bg-danger text-white";
    }
  }

  isPresentClick(i : number) : void {
    this.skjema.present[i] = !this.skjema.present[i];
    this.toolservice.oppdatereSkjema(this.skjema);
  }

  byttDato() : void {
    this.router.navigate(['/opprett-ny', this.skjema.dato])
    this.sjekkeOmSkjemaSkalOpprettes( this.skjema.dato);  
  }

  sjekkeOmSkjemaSkalOpprettes(dato : string) : void {
    this.observableSkjema = this.toolservice.hentSkjemaPaDato(dato);
    this.observableSkjema.subscribe({
      next : skjemaer => {
        if(skjemaer.length > 0 )
        {
          //Treff
          this.skjema = skjemaer[0];
          this.valgtSkjemaEksisterer = true;
        }
        else{
          //Spørre om å opprette nytt skjema til valgt dato
          this.valgtSkjemaEksisterer = false;
          this.tempDato = dato;
        }
      }
    })
  }

  slettSkjema() : void {
    this.toolservice.slettSkjema(this.skjema);
  }

  opprettNyttSkjema() : void{

    let lokalId : string;
    let lokalDato : string;
    let lokalElever : Elev[];
    let lokalPresent : boolean[] = [];
    let lokalEvent : string;

    this.observableElever = this.toolservice.hentAlleElever();
    this.observableElever.subscribe({
      next : elever => {
        lokalElever = elever;
        for (let index = 0; index < elever.length; index++) {
          lokalPresent[index] = false;          
        }
        lokalEvent = 'trening';
        lokalDato = this.tempDato;
        lokalId = this.toolservice.opprettId();

        this.skjema = {
          id : lokalId,
          dato : lokalDato,
          elever : lokalElever,
          present : lokalPresent,
          event : lokalEvent
        }

        this.valgtSkjemaEksisterer = true;

        this.toolservice.lagreSkjema(this.skjema);       

      }
    })
  }
}