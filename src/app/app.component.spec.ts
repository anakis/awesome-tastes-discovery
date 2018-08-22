import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TemplateModule } from '@app/template/template.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { MainComponent } from '@app/main/main.component';
import { APP_BASE_HREF } from '@angular/common';
import { LikeListComponent } from '@app/like-list/like-list.component';
import { StarWarsResourcesModule } from '@app/star-wars/star-wars-resources/star-wars-resources.module';
import { MarvelResourcesModule } from '@app/marvel/marvel-resources/marvel-resources.module';
import { FeatureModule } from '@app/feature/feature.module';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainComponent,
        LikeListComponent
      ],
      imports: [
        TemplateModule,
        AppRoutingModule,
        StarWarsResourcesModule,
        MarvelResourcesModule,
        FeatureModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'awesome-tastes-discovery'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('awesome-tastes-discovery');
  }));
  it('should have one children', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  }));
});
