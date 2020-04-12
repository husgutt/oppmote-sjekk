import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Elev } from '../oppmote-skjema/elev';
import { ActivatedRoute, Router } from '@angular/router';
import { ToolsService } from '../tools.service';

@Component({
  selector: 'os-ny-elev',
  templateUrl: './ny-elev.component.html',
  styleUrls: ['./ny-elev.component.css']
})
export class NyElevComponent implements OnInit {

  constructor(private firestore : AngularFirestore, private route: ActivatedRoute, private toolservice : ToolsService, private router: Router) {

  }

  currentElev : Elev;
  elevId : string;
  collection : string = "elev";
  eksistererFraForAv : boolean;

  ngOnInit(): void {

    this.currentElev = {
      id: "0",
      firstname : "Fornavn",
      lastname : "Etternavn",
      age : 99
    }

    this.elevId = this.route.snapshot.paramMap.get('id');

    if(!this.elevId)
    {
      console.log("Oppretter Ny Elev")
      this.eksistererFraForAv = false;
    }
    else
    {
      this.firestore.collection(this.collection).doc<Elev>(this.elevId).valueChanges().subscribe(
        {
          next : elev => {
          if(elev)
          {
            this.eksistererFraForAv = true;
            this.currentElev = elev
          }
          else{
            console.log("Brukeren finnes ikke")
            this.eksistererFraForAv = false;
          }
        },
          error : err => console.log(err)
      });
    }
  }

  lagreElev() : void {
    if(this.eksistererFraForAv){
       console.log("oppdaterer elev")
      this.firestore.collection<Elev>(this.collection).doc(this.currentElev.id).update(this.currentElev);
      this.router.navigate(['/elever'])
    }
    else{
      console.log("opprett elev", this.toolservice.opprettId())
      this.elevId = this.toolservice.opprettId();
      this.currentElev.id = this.elevId;
      this.firestore.collection<Elev>(this.collection).doc(this.elevId).set(this.currentElev);
      this.router.navigate(['/elever'])
    }
  }

  slettElev() : void {
    this.firestore.collection<Elev>(this.collection).doc(this.elevId).delete();
    this.router.navigate(['/elever'])
  }
}
