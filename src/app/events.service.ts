import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {fromPromise} from 'rxjs/observable/fromPromise';


export interface Event {
  isActive: boolean;
  name: string;
  date: string;
  issues: any;
}

@Injectable()
export class EventsService {
  public events = this.firebaseDb.list('/events');

  constructor(private firebaseDb: AngularFireDatabase) {
  }

  addEvent(event: Event) {
    return fromPromise(this.events.push(event));
  }
}
