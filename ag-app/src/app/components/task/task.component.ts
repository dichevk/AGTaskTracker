import { Component, OnInit, Input } from '@angular/core';
import { ITask } from 'src/app/types/ITask';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  faTimes = faTimes
  @Input() task!: ITask
  constructor(){}

  ngOnInit(): void {
      
  }
}
