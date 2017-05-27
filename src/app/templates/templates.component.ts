import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {combineLatest} from 'rxjs/observable/combineLatest';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
  isEditMode: Observable<boolean>;
  groups = this.firebaseDb.list('/groups');
  private groupFormOpen: boolean;

  currentTemplate: any;

  constructor(private firebaseDb: AngularFireDatabase, activatedRoute: ActivatedRoute) {
    this.isEditMode = activatedRoute.queryParams.map(params => params.edit === 'true');
    this.currentTemplate = combineLatest(this.groups, activatedRoute.params)
      .map(([groups, {id}]) => {

        return groups.map(group => Object.keys(group.tasks).map($key => ({
            ... group.tasks[$key], $key
          })).find(task => task.$key === id))[0] || null;
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
