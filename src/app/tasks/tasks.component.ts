import { Component ,OnInit} from '@angular/core';
import { TaskService } from '../Services/task.service';
import { Task } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks:Task[]=[];
  constructor(private taskService: TaskService){

  }
  ngOnInit():void {
  this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
 }

 deleteTask(task:Task){

  this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
 }
 ToggleRemainder(task:Task){
  task.reminder=!task.reminder;
  this.taskService.updateTaskRemainder(task).subscribe();
 }
 addTask(task:Task){
  this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));

 }

}
