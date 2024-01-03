import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task';
import { UiService } from '../../Services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  public text: string ="";
  public day: string="";
  reminder: boolean = false;
  subscription:Subscription | undefined;
  public show:boolean=false;

  constructor(private uiService:UiService) {
 this.subscription=this.uiService.onToggle().subscribe((value)=>this.show=value)
   }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task!');
      return;
    }

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}


