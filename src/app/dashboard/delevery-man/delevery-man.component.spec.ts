import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleveryManComponent } from './delevery-man.component';

describe('DeleveryManComponent', () => {
  let component: DeleveryManComponent;
  let fixture: ComponentFixture<DeleveryManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleveryManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleveryManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
