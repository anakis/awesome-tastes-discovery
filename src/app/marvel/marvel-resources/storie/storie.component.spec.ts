import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorieComponent } from './storie.component';
import { FeatureModule } from '@app/feature/feature.module';
import { TemplateModule } from '@app/template/template.module';

describe('StorieComponent', () => {
  let component: StorieComponent;
  let fixture: ComponentFixture<StorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorieComponent ],
      imports: [ FeatureModule, TemplateModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
