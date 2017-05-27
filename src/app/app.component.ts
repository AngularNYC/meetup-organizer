import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  groups = this.firebaseDb.list('/groups');
  groupFormOpen = false;
  groupsDropdown;
  date;
  eventTitle;
  repo = 'aziz512/my-second-project';
  constructor(private http: Http, private firebaseDb: AngularFireDatabase) { }

  addGroup() {
    this.groupFormOpen = !this.groupFormOpen;
  }

  groupAdded(group) {
    this.groupFormOpen = false;
    this.groups.push(group);
  }

  publish() {
    this.groups.subscribe(groups => {
      groups.forEach(group => {
        if (this.groupsDropdown.includes(group.label)) {
          Object.keys(group.tasks).forEach(key => {
            let task = group.tasks[key];
            this.createIssue(task.name, task.description, group.label, localStorage['github-access-token']).subscribe();
          });
        }
      })
    });
  }

  createIssue(name, text, label, accessToken) {
    const headers = new Headers({ 'Authorization': 'token ' + accessToken });
    const options = new RequestOptions({ headers: headers });
    let issueData = {
      title: `[${this.date}] [${this.eventTitle}] ${name}`,
      body: text,
      labels:[label]
    };
    return this.http.post(`https://api.github.com/repos/${this.repo}/issues`, issueData, options);
  }
}
