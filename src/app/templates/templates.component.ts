import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {combineLatest} from 'rxjs/observable/combineLatest';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
  groups = this.firebaseDb.list('/groups');
  private groupFormOpen: boolean;

  currentGroup: any;

  constructor(private firebaseDb: AngularFireDatabase, activatedRoute: ActivatedRoute) {
    this.currentGroup = combineLatest(this.groups, activatedRoute.params)
      .map(([groups, {id}]) => {

        return groups.map(group => Object.keys(group.tasks).map($key => ({
            ...
              group.tasks[$key], $key
          })).find(task => console.log(task.$key === id, task.$key, id, task) || task.$key === id))[0] || null;
      });
  }


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
