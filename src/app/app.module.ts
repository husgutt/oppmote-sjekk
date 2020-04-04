import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OppmoteSkjemaComponent } from './oppmote-skjema/oppmote-skjema.component';

@NgModule({
  declarations: [
    AppComponent,
    OppmoteSkjemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
