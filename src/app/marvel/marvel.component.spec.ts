import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelComponent } from './marvel.component';
import { FeatureModule } from '@app/feature/feature.module';
import { HttpClientModule } from '@angular/common/http';

describe('MarvelComponent', () => {
  let component: MarvelComponent;
  let fixture: ComponentFixture<MarvelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelComponent ],
      imports: [HttpClientModule, FeatureModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
