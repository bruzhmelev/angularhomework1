import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placesFilter'
})
export class PlacesFilterPipe implements PipeTransform {

  public transform(places: Place[], selectedPlaceType?: PlaceType): Place[] {
    if (!selectedPlaceType) {
      return places;
    }
    return places
      .filter((place: Place) => place.placeType.id === selectedPlaceType.id);
  }

}
