import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeListComponent } from './like-list.component';
import { StarWarsResourcesModule } from '@app/star-wars/star-wars-resources/star-wars-resources.module';
import { MarvelResourcesModule } from '@app/marvel/marvel-resources/marvel-resources.module';
import { FeatureModule } from '@app/feature/feature.module';
import { TemplateModule } from '@app/template/template.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('LikeListComponent', () => {
  let component: LikeListComponent;
  let fixture: ComponentFixture<LikeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LikeListComponent],
      imports: [StarWarsResourcesModule, MarvelResourcesModule, FeatureModule, TemplateModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
