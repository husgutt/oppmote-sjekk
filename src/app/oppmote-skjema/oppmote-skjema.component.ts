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
  
  currentSkjemaDoc : AngularFirestoreDocument<Skjema>;
  currentElever : Observable<Elev[]>;
  elever : Elev[];
  currentDate : string;
  currentId : string;
  tidligereSkjemaEksister: boolean = false;
  dagensSkjema : boolean = false;
  presentArray : boolean[] = [];
  
  constructor(private firestore: AngularFirestore, private route: ActivatedRoute, private router: Router, private toolservice : ToolsService){}

  ngOnInit(): void {

    this.initiateSkjema();
    this.currentId = this.route.snapshot.paramMap.get('id');

    if(!this.currentId) {
      console.log("ingen idparameter, viser dagens")
      this.currentDate = this.dateFormat();
      this.dagensSkjema = true;
      console.log(this.skjema)
    }
    // else {
    //   this.currentSkjemaDoc = this.firestore.doc(this.currentId);
    //   this.currentSkjemaDoc.valueChanges().subscribe({
    //     next: skjema => {
    //       if(skjema){
    //         this.skjema = skjema
    //         this.tidligereSkjemaEksister = true;
    //       }
    //       else {
    //         console.log("Skjema eksisterer ikke fra før av")
    //         this.currentElever = this.firestore.collection<Elev>("elev").valueChanges();
    //         this.currentElever.subscribe({
    //           next: elever => {this.elever = elever;            
    //           this.skjema = this.opprettNyttSkjema();
    //           this.currentSkjemaDoc.set(this.skjema);}
    //         });
    //       }
    //     }
    //   });
    // }
  }

  // opprettNyttSkjema() : Skjema {

  //   return  {
  //     dato : this.currentDate,
  //     elever : this.elever,
  //     event : "trening"
  //   }

  // }
 
  color(i : number) : string {
    // if(!this.skjema.elever[i].present)
    // {
    //   return "background-color: red;" ;
    // }
    // else {
    //     return "background-color: green;";
    // }

    return "background-color: green;";
  }

  isPresentClick(i : number) : void {
    // this.skjema.elever[i].present = !this.skjema.elever[i].present;
    this.saveSkjema();
  }

  dateFormat() : string {
    return new Date().toISOString().slice(0,10);
  }
  
  saveSkjema() : void {
    this.currentSkjemaDoc.update(this.skjema)
  }

  printSkjema() : void {
  }

  test() : void {
    this.currentDate = this.skjema.dato;
    this.ngOnInit()
    this.router.navigate(['/opprett-ny', this.skjema.dato])
  }

  initiateSkjema() : void {
    this.skjema = {
      id: "1",
      dato : this.currentDate,
      elever : [],
      present:[],
      event : "trening"
    }
  }

  opprettDagensSkjema() : void {

    let returSkjema : Skjema;

    this.currentElever = this.firestore.collection<Elev>("elev").valueChanges();
    this.currentElever.subscribe({
      next: elever => {
        this.elever = elever;
        console.log(elever)
        for (let index = 0; index < elever.length; index++) {
          this.presentArray[index] = false; 
        }
        this.currentId = this.toolservice.opprettId();
      }
    });
  }
}