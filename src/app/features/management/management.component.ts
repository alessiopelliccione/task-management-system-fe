import { Component, OnInit } from '@angular/core';
import { Task } from '../../core/models/Task';
import { TaskService } from '../../core/services/task/task.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './management.component.html',
  styleUrl: './management.component.css'
})
export class ManagementComponent implements OnInit {

  tasks: Task[] = [];
  status: Record<string, string> = {
    IN_PROGRESS: 'in progress',
    DONE: 'done'
  }


  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.loadTasks()
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(response => {
      this.tasks = response;
    })
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== id);
    })
  }

  changeStatus(id: number) {
    const newTask = this.tasks.find(task => task.id == id);
    if (newTask) {
      if (newTask.status === this.status['IN_PROGRESS']) {
        newTask.status = this.status['DONE'];
      } else {
        newTask.status = this.status['IN_PROGRESS'];
      }
      this.taskService.updateTask(id, newTask).subscribe();
    }
  }

}
