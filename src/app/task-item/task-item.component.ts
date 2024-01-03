import { Component, EventEmitter, Input,Output , } from '@angular/core';
import { Task } from '../task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: Task ={
    text: '',
    day: '',
    reminder: false
  };
  faTimes=faTimes;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleRemainder: EventEmitter<Task> = new EventEmitter();
  // task: any = [{
  //   id: 1,
  //   text: "test"
  // },{
  //   id: 2,
  //   text: "test"
  // },

  // ]
  onDelete(task: any) {
    this.onDeleteTask.emit(task);
  }
  onToggle(task: any) {
    this.onToggleRemainder.emit(task);
  }


}
