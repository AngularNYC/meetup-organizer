import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
  groups = this.firebaseDb.list('/groups');
  private groupFormOpen: boolean;

  constructor(private firebaseDb: AngularFireDatabase) { }



  addGroup() {
    this.groupFormOpen = !this.groupFormOpen;
  }

  groupAdded(group) {
    this.groupFormOpen = false;
    this.groups.push(group);
  }

  ngOnInit() {
  }

}
