import { Component,Input,input,output,EventEmitter, Output } from '@angular/core';
import { CommonModule } from "@angular/common";
@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent {
  title = "Child Component";
  today = Date();
  @Input() child = 0;
  //send data child to parrent
  @Output() updatedataEvent = new EventEmitter<string>();
  
  users = {
    username: "Zahid",
    Age:26
  }
}
