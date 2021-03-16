import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineeditComponent } from './routineedit.component';

describe('RoutineeditComponent', () => {
  let component: RoutineeditComponent;
  let fixture: ComponentFixture<RoutineeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutineeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
