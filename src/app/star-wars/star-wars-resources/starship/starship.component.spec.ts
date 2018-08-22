import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipComponent } from './starship.component';
import { FeatureModule } from '@app/feature/feature.module';
import { TemplateModule } from '@app/template/template.module';

describe('StarshipComponent', () => {
  let component: StarshipComponent;
  let fixture: ComponentFixture<StarshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipComponent ],
      imports: [ FeatureModule, TemplateModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
