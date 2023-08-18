import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/data/TaskMockData'; 
import { ITask } from 'src/app/types/ITask';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
  tasks:ITask[] = TASKS

  constructor(private taskService : TaskService){}
  
  ngOnInit():void {
    this.taskService.getAll().subscribe((tasks) => {this.tasks=tasks})
  }
}
