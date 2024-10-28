import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TaskService } from '../../../../core/services/task/task.service';

@Component({
  selector: 'app-task-status-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './task-status-chart.component.html',
  styleUrl: './task-status-chart.component.css'
})
export class TaskStatusChartComponent implements OnInit {
  data: any[] = [];
  
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTaskStatusData();
  }

  loadTaskStatusData() {
    this.taskService.getTaskStatusData().subscribe(response => {
      this.data = response;
    });
  }

}
