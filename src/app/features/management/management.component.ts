import { Component, OnInit } from '@angular/core';
import { Task } from '../../core/models/Task';
import { TaskService } from '../../core/services/task.service';
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

  markAsDone(id: number) {
    const newTask = this.tasks.find(task => task.id == id);
    if (newTask) {
      newTask.status = "Completed";
      this.taskService.updateTask(id, newTask).subscribe();
    }
  }

}
