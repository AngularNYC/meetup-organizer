import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Headers, Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {combineLatest} from 'rxjs/observable/combineLatest';

interface GithubIssue {
  body: string;
  title: string;
  labels: Array<string>;
}
@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {
  repo = 'angularNYC/meetup';
  groups = this.firebaseDb.list('/groups');
  selectedGroups: Array<String> = [];
  date: string = PublishComponent.today();
  eventTitle: string;
  issuesCreatedDate = '';
  issuesCreated: Array<GithubIssue> = [];

  static today() {
    return new Date().toJSON().slice(0, 10);
  }

  constructor(private firebaseDb: AngularFireDatabase, private http: Http) {
    this.groups.subscribe((groups) => {
      this.selectedGroups = groups.map(g => g.label);
    });
  }


  labelUrl(label) {
    return `https://github.com/${this.repo}/issues?q=label:${label}`;
  }

  publish() {
    this.issuesCreatedDate = this.date;


    this.groups.subscribe(groups => {
      const groupRequests = groups.filter(group => this.selectedGroups.includes(group.label))
        .map(group => {
          return combineLatest(Object.keys(group.tasks).map(key => {
            const task = group.tasks[key];
            return this.createIssue(task.name, task.description, group.label, localStorage['github-access-token']);
          }));
        });


      combineLatest(groupRequests).subscribe((result) => {
        this.issuesCreated = [].concat.apply([], result);
      });
    });
  }

  createIssue(name, body, label, accessToken) {
    const headers = new Headers({'Authorization': 'token ' + accessToken});

    const options = new RequestOptions({headers});
    const eventTitle = this.eventTitle ? ' ' + this.eventTitle + ':' : '';
    const title = `[${this.date}] ${eventTitle} ${name}`;
    const labels = [label, this.date];

    return this.http.post(`https://api.github.com/repos/${this.repo}/issues`, {
      title,
      body,
      labels
    }, options).map(res => (res.json()));
  }

  ngOnInit() {
  }

}
