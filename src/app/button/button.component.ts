import { Component,Input ,OnInit, Output,EventEmitter} from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: String | undefined;
  @Input() color:String | undefined;
  @Output() btnClick:EventEmitter<Task>=new EventEmitter();

  constructor() {
    
  }
  ngOnInit():void{}

  onClick(){
    this.btnClick.emit();
  }


}
