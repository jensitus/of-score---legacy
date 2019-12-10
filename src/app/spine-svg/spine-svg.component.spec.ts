import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpineSvgComponent } from './spine-svg.component';

describe('SpineSvgComponent', () => {
  let component: SpineSvgComponent;
  let fixture: ComponentFixture<SpineSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpineSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpineSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
