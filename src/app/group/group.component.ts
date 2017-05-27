import {Component, Input, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  @Input()
  group;
  tasks;
  isAddTask = false;

  constructor(private firebaseDb: AngularFireDatabase, private firebaseAuth: AngularFireAuth) {
  }

  ngOnInit() {
    this.tasks = this.firebaseDb.list(`/groups/${this.group.$key}/tasks`);

    if (!localStorage['github-access-token']) {
      const provider = new firebase.auth.GithubAuthProvider();
      provider.addScope('repo');
      this.firebaseAuth.auth.signInWithPopup(provider).then(authData => {
        localStorage['github-access-token'] = authData.credential.accessToken;
      });
    }
  }

  toggleTaskForm() {
    this.isAddTask = !this.isAddTask;
  }

  addTask(task) {
    const tasks = this.firebaseDb.list('/groups/' + this.group.$key + '/tasks');
    tasks.push(task);
    this.isAddTask = false;
  }

  tasksToArray(tasksObject) {
    return tasksObject ? Object.keys(tasksObject).map(key => tasksObject[key]) : [];
  }
}
