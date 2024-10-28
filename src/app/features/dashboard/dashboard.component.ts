import { Component } from '@angular/core';
import { TaskAssignmentChartComponent } from './components/task-assignment-chart/task-assignment-chart.component';
import { TaskStatusChartComponent } from './components/task-status-chart/task-status-chart.component';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TaskAssignmentChartComponent, TaskStatusChartComponent, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

  isAdmin(): boolean {
    return localStorage.getItem('roleType') === 'admin' ? true : false;
  }

}

