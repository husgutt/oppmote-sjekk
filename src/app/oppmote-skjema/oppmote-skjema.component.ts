import { Component, OnInit } from '@angular/core';

import { Skjema } from './skjema';

@Component({
  selector: 'os-oppmote-skjema',
  templateUrl: './oppmote-skjema.component.html',
  styleUrls: ['./oppmote-skjema.component.css']
})
export class OppmoteSkjemaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  skjema : Skjema = {
    dato : this.dateFormat(),
    elever : [
      {
        name : "tore",
        age : 32,
        present: false
      },
      {
        name : "kjartan",
        age : 32,
        present : true
      }
    ],
    event : "kamp"
  }


  color(i : number) : string {
    if(!this.skjema.elever[i].present)
    {
      return "background-color: red;" ;
    }
    else {
        return "background-color: green;";
    }
  }

  isPresentClick(i : number) : void {
    this.skjema.elever[i].present = !this.skjema.elever[i].present;
  }

  dateFormat() : string {
    return new Date().toISOString().slice(0,10);
  }
  
  saveSkjema() : void {

  }
  
}