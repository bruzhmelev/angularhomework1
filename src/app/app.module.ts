import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TemperaturComponent } from './temperatur/temperatur.component';
import { TeddyBearComponent } from './teddy-bear/teddy-bear.component';
import { PlacesListComponent } from './places-list/places-list.component';
import { PlacesFilterPipe } from './common/pipes/places-filter/places-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TemperaturComponent,
    TeddyBearComponent,
    PlacesListComponent,
    PlacesFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
