import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {
  name = '';
  label = '';

  @Output()
  groupCreated = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

  }

  create() {
    if (this.name && this.label) {
      this.groupCreated.next({
        name: this.name,
        label: this.label,
        tasks: []
      });
    }
  }

}
