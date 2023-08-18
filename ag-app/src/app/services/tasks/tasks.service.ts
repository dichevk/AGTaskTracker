
import { Injectable } from '@angular/core';
import { ITask } from '../../types/ITask';
import { TASKS } from '../../data/TaskMockData';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getAll():Observable<ITask[]>{
    return of(TASKS)
  }
}