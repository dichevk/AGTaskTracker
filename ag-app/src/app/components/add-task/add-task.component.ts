import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PresenterService } from 'src/app/services/presenter/presenter-service.service';
import { ITask } from 'src/app/types/ITask';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<ITask> = new EventEmitter();
  title!: string;
  description!: string;
  reminder: boolean = false;
  showAddTask!: boolean;
  subscription: Subscription;

  constructor(private uiService: PresenterService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}
  
   ngOnDestroy() {
        // Unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

  onSubmit() {
    if (!this.title) {
      alert('Please add a task!');
      return;
    }

    const newTask: ITask = {
      id: Math.random(),
      title: this.title,
      description: this.description,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.title = '';
    this.description = '';
    this.reminder = false;
  }
}