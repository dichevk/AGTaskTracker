import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresenterService {
  private showTask:boolean = false
  private taskSubject = new Subject()
  constructor() { }
  toggleAddTask():void {
    this.showTask = !this.showTask;
    this.taskSubject.next(this.showTask);
  }
  onToggle():Observable<any>{
    return this.taskSubject.asObservable();
  }
}

