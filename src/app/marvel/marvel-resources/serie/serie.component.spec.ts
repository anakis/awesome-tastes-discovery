import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieComponent } from './serie.component';
import { FeatureModule } from '@app/feature/feature.module';

describe('SerieComponent', () => {
  let component: SerieComponent;
  let fixture: ComponentFixture<SerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieComponent ],
      imports: [ FeatureModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
