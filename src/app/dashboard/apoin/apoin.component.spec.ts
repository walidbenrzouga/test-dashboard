import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoinComponent } from './apoin.component';

describe('ApoinComponent', () => {
  let component: ApoinComponent;
  let fixture: ComponentFixture<ApoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
