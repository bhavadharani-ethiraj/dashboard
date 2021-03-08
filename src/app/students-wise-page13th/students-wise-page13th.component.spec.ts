import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsWisePage13thComponent } from './students-wise-page13th.component';

describe('StudentsWisePage13thComponent', () => {
  let component: StudentsWisePage13thComponent;
  let fixture: ComponentFixture<StudentsWisePage13thComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsWisePage13thComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsWisePage13thComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
