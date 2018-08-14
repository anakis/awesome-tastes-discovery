import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsComponent } from './star-wars.component';
import { FeatureModule } from '@app/feature/feature.module';

describe('StarWarsComponent', () => {
  let component: StarWarsComponent;
  let fixture: ComponentFixture<StarWarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarWarsComponent ],
      imports: [FeatureModule]
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
