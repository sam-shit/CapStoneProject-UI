import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerDashoardComponent } from './organizer-dashoard.component';

describe('OrganizerDashoardComponent', () => {
  let component: OrganizerDashoardComponent;
  let fixture: ComponentFixture<OrganizerDashoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizerDashoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizerDashoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
