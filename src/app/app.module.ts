import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OppmoteSkjemaComponent } from './oppmote-skjema/oppmote-skjema.component';
import { SkjemaListeComponent } from './skjema-liste/skjema-liste.component';
import { VelkommenComponent } from './velkommen/velkommen.component';
import { EleverComponent } from './elever/elever.component';
import { ElevComponent } from './elev/elev.component';
import { NyElevComponent } from './ny-elev/ny-elev.component';

@NgModule({
  declarations: [
    AppComponent,
    OppmoteSkjemaComponent,
    SkjemaListeComponent,
    VelkommenComponent,
    EleverComponent,
    ElevComponent,
    NyElevComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'skjemaer', component: SkjemaListeComponent},
      { path: 'opprett-ny', component: OppmoteSkjemaComponent},
      { path: 'opprett-ny/:id', component: OppmoteSkjemaComponent},
      { path: 'ny-elev', component: NyElevComponent},
      { path: 'ny-elev/:id', component: NyElevComponent},
      { path: 'elever', component: EleverComponent},
      { path: 'velkommen', component: VelkommenComponent},
      { path: '', redirectTo: 'velkommen', pathMatch: 'full'},
      { path: 'opprett-ny', component: OppmoteSkjemaComponent},
      { path: '**-ny', component: VelkommenComponent}
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
