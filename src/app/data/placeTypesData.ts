import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const PLACE_TYPES: PlaceType[] = [
  {
    id: 1,
    name: 'Hotel'
  },
  {
    id: 2,
    name: 'Fishing'
  },
  {
    id: 3,
    name: 'Tours'
  },
  {
    id: 4,
    name: 'Weather'
  },

];


export const placeTypes$: Observable<PlaceType[]> = Observable.of(PLACE_TYPES);
