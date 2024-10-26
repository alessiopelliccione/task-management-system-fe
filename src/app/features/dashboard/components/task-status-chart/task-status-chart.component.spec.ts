import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStatusChartComponent } from './task-status-chart.component';

describe('TaskStatusChartComponent', () => {
  let component: TaskStatusChartComponent;
  let fixture: ComponentFixture<TaskStatusChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskStatusChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskStatusChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
