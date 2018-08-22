import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleComponent } from './vehicle.component';
import { FeatureModule } from '@app/feature/feature.module';
import { TemplateModule } from '@app/template/template.module';

describe('VehicleComponent', () => {
  let component: VehicleComponent;
  let fixture: ComponentFixture<VehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleComponent ],
      imports: [ FeatureModule, TemplateModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
