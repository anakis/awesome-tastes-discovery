import { MarvelResourcesModule } from './marvel-resources.module';

describe('MarvelResourcesModule', () => {
  let marvelResourcesModule: MarvelResourcesModule;

  beforeEach(() => {
    marvelResourcesModule = new MarvelResourcesModule();
  });

  it('should create an instance', () => {
    expect(marvelResourcesModule).toBeTruthy();
  });
});
