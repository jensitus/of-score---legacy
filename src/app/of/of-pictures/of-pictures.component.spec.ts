import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfPicturesComponent } from './of-pictures.component';

describe('OfPicturesComponent', () => {
  let component: OfPicturesComponent;
  let fixture: ComponentFixture<OfPicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfPicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
