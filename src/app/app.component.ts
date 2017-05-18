import { Component } from '@angular/core';
import { places$ } from './data/placesData';
import { placeTypes$ } from './data/placeTypesData';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public places$: Observable<Place[]> = places$;
  public placeTypes$: Observable<PlaceType[]> = placeTypes$;

  private selectedPlace:Place;
  private selectedPlaceType:PlaceType;


  public onPlaceSelect(selectedPlace:Place){
    this.selectedPlace = selectedPlace;
  }

  public onPlaceTypeSelect(selectedPlaceType:PlaceType){
    this.selectedPlaceType = selectedPlaceType;
  }
}
