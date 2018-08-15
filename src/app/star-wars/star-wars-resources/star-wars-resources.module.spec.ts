import { StarWarsResourcesModule } from './star-wars-resources.module';

describe('StarWarsResourcesModule', () => {
  let starWarsResourcesModule: StarWarsResourcesModule;

  beforeEach(() => {
    starWarsResourcesModule = new StarWarsResourcesModule();
  });

  it('should create an instance', () => {
    expect(starWarsResourcesModule).toBeTruthy();
  });
});
