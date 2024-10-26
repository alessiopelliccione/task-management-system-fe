import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAssignmentChartComponent } from './task-assignment-chart.component';

describe('TaskAssignmentChartComponent', () => {
  let component: TaskAssignmentChartComponent;
  let fixture: ComponentFixture<TaskAssignmentChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskAssignmentChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskAssignmentChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
