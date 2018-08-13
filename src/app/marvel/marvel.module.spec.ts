import { MarvelModule } from './marvel.module';

describe('MarvelModule', () => {
  let marvelModule: MarvelModule;

  beforeEach(() => {
    marvelModule = new MarvelModule();
  });

  it('should create an instance', () => {
    expect(marvelModule).toBeTruthy();
  });
});
