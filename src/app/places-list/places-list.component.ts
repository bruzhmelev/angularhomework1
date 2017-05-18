import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'widget-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {

  constructor() { }

  @Output()
  public onSelectPlace: EventEmitter<Place> = new EventEmitter();

  @Output()
  public onSelectPlaceType: EventEmitter<PlaceType> = new EventEmitter();

  @Input()
  public places: Place[];

  @Input()
  public placeTypes: PlaceType[];

  private selectedPlace: Place;
  private selectedPlaceType: PlaceType;

  public ngOnInit(): void {
    this.trySelectFirst();
  }

  private trySelectFirst() {
    if(this.places && this.places[0]){
      this.selectPlace(this.places[0]);
    }
  }

  //trySelectFirstFrom
  // private trySelectFirstFrom(filteredPlaces: Place[]):void {
  //   if(filteredPlaces && filteredPlaces[0]){
  //     this.selectPlace(filteredPlaces[0]);
  //   }
  // }

  public selectPlace(selectedPlace: Place):void {
    this.selectedPlace = selectedPlace;
    this.onSelectPlace.emit(selectedPlace);
  }

  //TODO: вынести в отдельную компоненту и подписаться на событие
  public selectPlaceType(selectedPlaceType: PlaceType):void {
    this.selectedPlaceType = selectedPlaceType;
    this.onSelectPlaceType.emit(selectedPlaceType);
  }
}
