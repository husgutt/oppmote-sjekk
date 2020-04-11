import { Component } from '@angular/core';

@Component({
  selector: 'os-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oppmote-sjekk';
  dagensDato : string = this.dateFormat();

  dateFormat() : string {
    return new Date().toISOString().slice(0,10);
  }
  
}
