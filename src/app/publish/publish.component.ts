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
  issuesCreated: Array<GithubIssue|any> = [
    {
      'url': 'https://api.github.com/repos/AngularNYC/meetup/issues/16',
      'repository_url': 'https://api.github.com/repos/AngularNYC/meetup',
      'labels_url': 'https://api.github.com/repos/AngularNYC/meetup/issues/16/labels{/name}',
      'comments_url': 'https://api.github.com/repos/AngularNYC/meetup/issues/16/comments',
      'events_url': 'https://api.github.com/repos/AngularNYC/meetup/issues/16/events',
      'html_url': 'https://github.com/AngularNYC/meetup/issues/16',
      'id': 231810496,
      'number': 16,
      'title': '[2323] [undefined] finduoe',
      'user': {
        'login': 'kirjs',
        'id': 2545357,
        'avatar_url': 'https://avatars3.githubusercontent.com/u/2545357?v=3',
        'gravatar_id': '',
        'url': 'https://api.github.com/users/kirjs',
        'html_url': 'https://github.com/kirjs',
        'followers_url': 'https://api.github.com/users/kirjs/followers',
        'following_url': 'https://api.github.com/users/kirjs/following{/other_user}',
        'gists_url': 'https://api.github.com/users/kirjs/gists{/gist_id}',
        'starred_url': 'https://api.github.com/users/kirjs/starred{/owner}{/repo}',
        'subscriptions_url': 'https://api.github.com/users/kirjs/subscriptions',
        'organizations_url': 'https://api.github.com/users/kirjs/orgs',
        'repos_url': 'https://api.github.com/users/kirjs/repos',
        'events_url': 'https://api.github.com/users/kirjs/events{/privacy}',
        'received_events_url': 'https://api.github.com/users/kirjs/received_events',
        'type': 'User',
        'site_admin': false
      },
      'labels': [
        {
          'id': 614392871,
          'url': 'https://api.github.com/repos/AngularNYC/meetup/labels/google',
          'name': 'google',
          'color': 'ededed',
          'default': false
        },
        {
          'id': 614431598,
          'url': 'https://api.github.com/repos/AngularNYC/meetup/labels/2323',
          'name': '2323',
          'color': 'ededed',
          'default': false
        }
      ],
      'state': 'open',
      'locked': false,
      'assignee': null,
      'assignees': [],
      'milestone': null,
      'comments': 0,
      'created_at': '2017-05-27T16:01:47Z',
      'updated_at': '2017-05-27T16:01:47Z',
      'closed_at': null,
      'body': 'theouneh',
      'closed_by': null
    },
    {
      'url': 'https://api.github.com/repos/AngularNYC/meetup/issues/18',
      'repository_url': 'https://api.github.com/repos/AngularNYC/meetup',
      'labels_url': 'https://api.github.com/repos/AngularNYC/meetup/issues/18/labels{/name}',
      'comments_url': 'https://api.github.com/repos/AngularNYC/meetup/issues/18/comments',
      'events_url': 'https://api.github.com/repos/AngularNYC/meetup/issues/18/events',
      'html_url': 'https://github.com/AngularNYC/meetup/issues/18',
      'id': 231810498,
      'number': 18,
      'title': '[2323] [undefined] uhoenu',
      'user': {
        'login': 'kirjs',
        'id': 2545357,
        'avatar_url': 'https://avatars3.githubusercontent.com/u/2545357?v=3',
        'gravatar_id': '',
        'url': 'https://api.github.com/users/kirjs',
        'html_url': 'https://github.com/kirjs',
        'followers_url': 'https://api.github.com/users/kirjs/followers',
        'following_url': 'https://api.github.com/users/kirjs/following{/other_user}',
        'gists_url': 'https://api.github.com/users/kirjs/gists{/gist_id}',
        'starred_url': 'https://api.github.com/users/kirjs/starred{/owner}{/repo}',
        'subscriptions_url': 'https://api.github.com/users/kirjs/subscriptions',
        'organizations_url': 'https://api.github.com/users/kirjs/orgs',
        'repos_url': 'https://api.github.com/users/kirjs/repos',
        'events_url': 'https://api.github.com/users/kirjs/events{/privacy}',
        'received_events_url': 'https://api.github.com/users/kirjs/received_events',
        'type': 'User',
        'site_admin': false
      },
      'labels': [
        {
          'id': 614431598,
          'url': 'https://api.github.com/repos/AngularNYC/meetup/labels/2323',
          'name': '2323',
          'color': 'ededed',
          'default': false
        },
        {
          'id': 614392871,
          'url': 'https://api.github.com/repos/AngularNYC/meetup/labels/google',
          'name': 'google',
          'color': 'ededed',
          'default': false
        }
      ],
      'state': 'open',
      'locked': false,
      'assignee': null,
      'assignees': [],
      'milestone': null,
      'comments': 0,
      'created_at': '2017-05-27T16:01:47Z',
      'updated_at': '2017-05-27T16:01:47Z',
      'closed_at': null,
      'body': 'uhoenut',
      'closed_by': null
    },
    {
      'url': 'https://api.github.com/repos/AngularNYC/meetup/issues/17',
      'repository_url': 'https://api.github.com/repos/AngularNYC/meetup',
      'labels_url': 'https://api.github.com/repos/AngularNYC/meetup/issues/17/labels{/name}',
      'comments_url': 'https://api.github.com/repos/AngularNYC/meetup/issues/17/comments',
      'events_url': 'https://api.github.com/repos/AngularNYC/meetup/issues/17/events',
      'html_url': 'https://github.com/AngularNYC/meetup/issues/17',
      'id': 231810497,
      'number': 17,
      'title': '[2323] [undefined] find speakers',
      'user': {
        'login': 'kirjs',
        'id': 2545357,
        'avatar_url': 'https://avatars3.githubusercontent.com/u/2545357?v=3',
        'gravatar_id': '',
        'url': 'https://api.github.com/users/kirjs',
        'html_url': 'https://github.com/kirjs',
        'followers_url': 'https://api.github.com/users/kirjs/followers',
        'following_url': 'https://api.github.com/users/kirjs/following{/other_user}',
        'gists_url': 'https://api.github.com/users/kirjs/gists{/gist_id}',
        'starred_url': 'https://api.github.com/users/kirjs/starred{/owner}{/repo}',
        'subscriptions_url': 'https://api.github.com/users/kirjs/subscriptions',
        'organizations_url': 'https://api.github.com/users/kirjs/orgs',
        'repos_url': 'https://api.github.com/users/kirjs/repos',
        'events_url': 'https://api.github.com/users/kirjs/events{/privacy}',
        'received_events_url': 'https://api.github.com/users/kirjs/received_events',
        'type': 'User',
        'site_admin': false
      },
      'labels': [
        {
          'id': 614431598,
          'url': 'https://api.github.com/repos/AngularNYC/meetup/labels/2323',
          'name': '2323',
          'color': 'ededed',
          'default': false
        },
        {
          'id': 614392871,
          'url': 'https://api.github.com/repos/AngularNYC/meetup/labels/google',
          'name': 'google',
          'color': 'ededed',
          'default': false
        }
      ],
      'state': 'open',
      'locked': false,
      'assignee': null,
      'assignees': [],
      'milestone': null,
      'comments': 0,
      'created_at': '2017-05-27T16:01:47Z',
      'updated_at': '2017-05-27T16:01:47Z',
      'closed_at': null,
      'body': 'uoe',
      'closed_by': null
    }
  ];

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
