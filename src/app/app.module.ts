import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CreateGroupComponent} from './create-group/create-group.component';
import {CreateTaskComponent} from './create-task/create-task.component';
import {GroupComponent} from './group/group.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {TaskComponent} from './task/task.component';
import {RouterModule, Routes} from '@angular/router';
import {TemplatesComponent} from './templates/templates.component';
import {PublishComponent} from './publish/publish.component';


const firebaseConfig = {
  apiKey: 'AIzaSyA-57paMR3-pz2Ufco-x09gV-9LMwB-6MQ',
  authDomain: 'meetup-organizer.firebaseapp.com',
  databaseURL: 'https://meetup-organizer.firebaseio.com',
  projectId: 'meetup-organizer'
};


const routes: Routes = [
  {
    path: '',
    component: TemplatesComponent
  },
  {
    path: 'templates',
    component: TemplatesComponent
  },
  {
    path: 'publish',
    component: PublishComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CreateGroupComponent,
    CreateTaskComponent,
    GroupComponent,
    TaskComponent,
    TemplatesComponent,
    PublishComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AngularFireDatabase, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule {
}
