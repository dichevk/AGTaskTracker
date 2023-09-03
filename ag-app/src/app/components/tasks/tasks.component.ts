import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/data/TaskMockData'; 
import { ITask } from 'src/app/types/ITask';
import { TasksService } from 'src/app/services/tasks/tasks.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
  tasks:ITask[] = TASKS

  constructor(private tasksService : TasksService){}
  
  ngOnInit():void {
    this.tasksService.getAll().subscribe((tasks) => {this.tasks=tasks})
  }
  deleteTask(task: ITask) {
    this.tasksService
      .deleteTask(task.id)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }
  toggleReminder(task: ITask) {
    task.reminder = !task.reminder;
    this.tasksService.updateTask(task.id,task).subscribe();
  }

  addTask(task: ITask) {
    this.tasksService.createTask(task).subscribe((task) => this.tasks.push(task));
  }
}


