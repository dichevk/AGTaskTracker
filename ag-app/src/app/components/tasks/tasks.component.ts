import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/data/TaskMockData'; 
import { ITask } from 'src/app/types/ITask';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
  tasks:ITask[] = TASKS

  constructor(){}
  
  ngOnInit():void {
    
  }
}
