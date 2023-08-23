
import { Injectable } from '@angular/core';
import { ITask } from '../../types/ITask';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {

 
  private apiUrl = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) {}

  getAll():Observable<ITask[]>{
    return this.http.get<ITask[]>(this.apiUrl)
  }

  getTask(taskId: number): Observable<ITask> {
    const url = `${this.apiUrl}/${taskId}`;
    return this.http.get<ITask>(url);
  }

  updateTask(taskId: number, updatedTask: ITask): Observable<ITask> {
    const url = `${this.apiUrl}/${taskId}`;
    return this.http.put<ITask>(url, updatedTask, httpOptions);
  }

  deleteTask(taskId: number): Observable<void> {
    const url = `${this.apiUrl}/${taskId}`;
    return this.http.delete<void>(url);
  }

  createTask(task:ITask): Observable<ITask>{
    return this.http.post<ITask>(this.apiUrl, task, httpOptions)
  }
}