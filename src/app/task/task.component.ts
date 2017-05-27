import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input()
  task
  @Input()
  group
  isNameEditing = false;
  isDescEditing = false;
  inputChange = new EventEmitter();
  constructor(private firebaseDb: AngularFireDatabase) { }

  ngOnInit() {
    this.inputChange.debounceTime(500).subscribe(() => {
      if (this.task.name && this.task.description) {
        this.firebaseDb.object(`/groups/${this.group.$key}/tasks/${this.task.$key}`).set({
          name: this.task.name,
          description: this.task.description
        });
      }
    });
  }


}
