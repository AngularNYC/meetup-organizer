import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {
  name:string = '';
  label:string = '';

  @Output()
  groupCreated = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  create(){
    if(this.name && this.label){
      this.groupCreated.next({
        name:this.name,
        label:this.label,
        tasks:[]
      });
    }
  }

}
