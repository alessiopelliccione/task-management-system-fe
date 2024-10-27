import { Component } from '@angular/core';
import { TaskAssignmentChartComponent } from './components/task-assignment-chart/task-assignment-chart.component';
import { TaskStatusChartComponent } from './components/task-status-chart/task-status-chart.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TaskAssignmentChartComponent, TaskStatusChartComponent, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {}

