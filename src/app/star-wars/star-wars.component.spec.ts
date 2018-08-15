import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsComponent } from './star-wars.component';
import { FeatureModule } from '@app/feature/feature.module';
import { HttpClientModule } from '@angular/common/http';
import { StarWarsResourcesModule } from '@app/star-wars/star-wars-resources/star-wars-resources.module';

describe('StarWarsComponent', () => {
  let component: StarWarsComponent;
  let fixture: ComponentFixture<StarWarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarWarsComponent ],
      imports: [HttpClientModule, StarWarsResourcesModule , FeatureModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
