import { Injectable } from '@angular/core';
import { ITask } from '../types/ITask';
import { TASKS } from '../data/TaskMockData';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getAll():Observable<ITask[]>{
    return of(TASKS)
  }
}
