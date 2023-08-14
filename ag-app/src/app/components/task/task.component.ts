import { Component, OnInit, Input } from '@angular/core';
import { ITask } from 'src/app/types/ITask';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task!: ITask
  constructor(){}

  ngOnInit(): void {
      
  }
}
