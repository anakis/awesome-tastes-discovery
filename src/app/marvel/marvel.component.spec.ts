import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelComponent } from './marvel.component';
import { FeatureModule } from '@app/feature/feature.module';
import { HttpClientModule } from '@angular/common/http';
import { MarvelResourcesModule } from '@app/marvel/marvel-resources/marvel-resources.module';
import { TemplateModule } from '@app/template/template.module';
import { RouterTestingModule } from '@angular/router/testing';


describe('MarvelComponent', () => {
  let component: MarvelComponent;
  let fixture: ComponentFixture<MarvelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelComponent ],
      imports: [HttpClientModule, MarvelResourcesModule, FeatureModule, TemplateModule, RouterTestingModule]
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
