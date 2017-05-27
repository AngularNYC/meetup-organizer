import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {ActivatedRoute} from '@angular/router';
import {combineLatest} from 'rxjs/observable/combineLatest';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  currentEvent: any;
  events = this.firebaseDb.list('/events');

  constructor(private firebaseDb: AngularFireDatabase, activatedRoute: ActivatedRoute) {
    this.currentEvent = combineLatest(this.events, activatedRoute.params)
      .map(([events, {id}]) => {
        console.log(events);
        return events.find(event => event.$key === id);
      });
  }

  ngOnInit() {
  }
}
