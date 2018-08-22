import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecieComponent } from './specie.component';
import { FeatureModule } from '@app/feature/feature.module';
import { TemplateModule } from '@app/template/template.module';

describe('SpecieComponent', () => {
  let component: SpecieComponent;
  let fixture: ComponentFixture<SpecieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecieComponent ],
      imports: [ FeatureModule, TemplateModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
