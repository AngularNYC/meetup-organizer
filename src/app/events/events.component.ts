import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events = this.firebaseDb.list('/events');

  constructor(private firebaseDb: AngularFireDatabase) {
  }

  ngOnInit() {
  }

}
