import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterImgComponent } from './center-img.component';

describe('CenterImgComponent', () => {
  let component: CenterImgComponent;
  let fixture: ComponentFixture<CenterImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
