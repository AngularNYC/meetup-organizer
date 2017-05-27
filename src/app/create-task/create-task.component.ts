import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  name:string;
  description:string;
  @Input()
  group;
  @Output()
  taskAdded = new EventEmitter();
  @Output()
  cancel = new EventEmitter();

  constructor(private app:AppComponent) { }
  

  ngOnInit() {
  }

  add(){
    this.taskAdded.next({
        name:this.name,
        description:this.description
    });
  }
}
