import { Component, OnInit } from '@angular/core';
import { Elev } from '../oppmote-skjema/elev';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'os-elever',
  templateUrl: './elever.component.html',
  styleUrls: ['./elever.component.css']
})
export class EleverComponent implements OnInit {

  elever : Elev[];
  elevCollection : Observable<Elev[]>;

  constructor(private firestore : AngularFirestore) { }

  ngOnInit(): void {

    this.elevCollection = this.firestore.collection<Elev>('elev').valueChanges();

    this.firestore.collection<Elev>('elev').valueChanges().subscribe({
      next: elever => this.elever = elever,
      error: err => console.log(err)
    });
  }


}
