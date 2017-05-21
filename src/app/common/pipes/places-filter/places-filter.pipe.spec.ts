import { PlacesFilterPipe } from './places-filter.pipe';

describe('PlacesFilterPipe', () => {
  it('create an instance', () => {
    const pipe: PlacesFilterPipe = new PlacesFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
