import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';
import { ToolsService } from '../tools.service';
import { Skjema } from '../oppmote-skjema/skjema';

@Component({
  selector: 'os-skjema-liste',
  templateUrl: './skjema-liste.component.html',
  styleUrls: ['./skjema-liste.component.css']
})
export class SkjemaListeComponent implements OnInit {

  skjemaListeObs : Observable<Skjema[]>;

  constructor(private toolservice: ToolsService) {

  }

  ngOnInit(): void {
    this.skjemaListeObs = this.toolservice.hentAlleSkjemaer();
  }

}
