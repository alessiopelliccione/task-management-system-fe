import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTaskStatusData(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/taskStatus');
  }

  getTaskAssignmentData(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/taskAssignment');
  }
  

}
