import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresenterService } from 'src/app/services/presenter/presenter-service.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = "Test Header";
  showAddTask:boolean = false
  subscription:Subscription;
  constructor(private presenterService:PresenterService, private router: Router){
    this.subscription = this.presenterService.onToggle().subscribe((val)=>{this.showAddTask=val})

  }

  ngOnInit(): void {

  }
  onDestroy():void{
    this.subscription.unsubscribe()
  }
  addTask():void {
  this.presenterService.toggleAddTask();    
  }
  hasRoute(route:string):boolean{
    return this.router.url === route
  }
}
