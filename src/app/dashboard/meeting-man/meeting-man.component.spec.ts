import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingManComponent } from './meeting-man.component';

describe('MeetingManComponent', () => {
  let component: MeetingManComponent;
  let fixture: ComponentFixture<MeetingManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
