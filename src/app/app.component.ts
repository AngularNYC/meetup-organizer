import {Component} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {AngularFireDatabase} from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  groupsDropdown;
  date;
  eventTitle;
  repo = 'angularNYC/meetup';

  constructor(private http: Http) {
  }


/*

  publish() {
    this.groups.subscribe(groups => {
      groups.forEach(group => {
        if (this.groupsDropdown.includes(group.label)) {
          Object.keys(group.tasks).forEach(key => {
            const task = group.tasks[key];
            this.createIssue(task.name, task.description, group.label, localStorage['github-access-token']).subscribe();
          });
        }
      });
    });
  }

  createIssue(name, text, label, accessToken) {
    const headers = new Headers({'Authorization': 'token ' + accessToken});
    const options = new RequestOptions({headers: headers});
    const issueData = {
      title: `[${this.date}] [${this.eventTitle}] ${name}`,
      body: text,
      labels: [label]
    };
    return this.http.post(`https://api.github.com/repos/${this.repo}/issues`, issueData, options);
  }
  */
}
