import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const PLACES: Place[] = [
  {
    title: 'Resort Address1',
    description: ['Sed perspiciatis', 'Et harum quidem'],
    phone: '+1285 968 685',
    imagesPaths: ['assets/images/res.jpg', 'assets/images/r1.jpg'],
    weather: {
      airTemperature: 24,
      waterTemperature: 14
    },
    social: {
      followers: 567,
      following: 187
    },
    placeType: {
      id: 1,
      name: 'Hotel'
    }
  },
  {
    title: 'Resort Address2',
    description: ['Sed perspiciatis', 'Et harum quidem'],
    phone: '+1285 968 685',
    imagesPaths: ['assets/images/res.jpg', 'assets/images/r1.jpg'],
    weather: {
      airTemperature: 22,
      waterTemperature: 10
    },
    social: {
      followers: 894,
      following: 123
    },
    placeType: {
      id: 1,
      name: 'Hotel'
    }
  },
  {
    title: 'Resort Address3',
    description: ['Sed perspiciatis', 'Et harum quidem'],
    phone: '+1285 968 685',
    imagesPaths: ['assets/images/res.jpg', 'assets/images/r1.jpg'],
    weather: {
      airTemperature: 12,
      waterTemperature: 12
    },
    social: {
      followers: 144,
      following: 12
    },
    placeType: {
      id: 1,
      name: 'Hotel'
    }
  },
  {
    title: 'Resort Address4',
    description: ['Sed perspiciatis', 'Et harum quidem'],
    phone: '+1285 968 685',
    imagesPaths: ['assets/images/res.jpg', 'assets/images/r1.jpg'],
    weather: {
      airTemperature: 34,
      waterTemperature: 18
    },
    social: {
      followers: 5578,
      following: 708
    },
    placeType: {
      id: 2,
      name: 'Fishing'
    }
  },
  {
    title: 'Resort Address5',
    description: ['Sed perspiciatis', 'Et harum quidem'],
    phone: '+1285 968 685',
    imagesPaths: ['assets/images/res.jpg', 'assets/images/r1.jpg'],
    weather: {
      airTemperature: 5,
      waterTemperature: 4
    },
    social: {
      followers: 1,
      following: 1
    },
    placeType: {
      id: 3,
      name: 'Tours'
    }
  },
];

export const places$: Observable<Place[]> = Observable.of(PLACES);
