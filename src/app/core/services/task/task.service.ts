import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../models/Task';
import { enviroment } from '../../../../enviroments/enviroment'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = enviroment.apiUrl;

  constructor(private http: HttpClient) { }

  getTaskStatusData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/taskStatus`);
  }

  getTaskAssignmentData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/taskAssignment`);
  }

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tasks`);
  }

  getTaskById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`)
  }

  createTask(task: Task): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/tasks`, task);
  }

  updateTask(id: number, task: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/tasks/${id}`, task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/tasks/${id}`);
  }


}
