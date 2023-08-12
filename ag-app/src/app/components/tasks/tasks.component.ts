import { Component } from '@angular/core';
import { TASKS } from 'src/app/data/TaskMockData'; 

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks = TASKS
}
