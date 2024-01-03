import { Component,OnInit,OnDestroy } from '@angular/core';
import { UiService } from '../../Services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title:string= "Task Tracker";
  public showAddTask :boolean=false;
  subscription:Subscription ;
  constructor(private uiService:UiService,private router:Router){
    
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));

  }
  ngOnInit(){}

  
  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }


}
