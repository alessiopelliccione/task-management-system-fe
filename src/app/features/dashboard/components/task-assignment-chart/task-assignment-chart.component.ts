import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../../core/services/task/task.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-task-assignment-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './task-assignment-chart.component.html',
  styleUrl: './task-assignment-chart.component.css'
})
export class TaskAssignmentChartComponent implements OnInit {

  data: any[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTaskAssignmentData();
  }

  loadTaskAssignmentData() {
    this.taskService.getTaskAssignmentData().subscribe(response => {
      this.data = response;
    });
  }

}
