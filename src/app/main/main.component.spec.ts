import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { TemplateModule } from '@app/template/template.module';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent ],
      imports: [
        TemplateModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have one children', async(() => {
    const fixture = TestBed.createComponent(MainComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-warp-container')).toBeTruthy();
  }));
});
