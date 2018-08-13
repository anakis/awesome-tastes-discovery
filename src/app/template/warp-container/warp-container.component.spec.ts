import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarpContainerComponent } from './warp-container.component';

describe('WarpContainerComponent', () => {
  let component: WarpContainerComponent;
  let fixture: ComponentFixture<WarpContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarpContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarpContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
