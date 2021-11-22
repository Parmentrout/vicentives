import { Injectable } from '@angular/core';
import { AsyncSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  calibrationChanged: Subject<void> = new Subject();

  constructor() { }

  triggerConfiguration(): void {
    this.calibrationChanged.next();
  }

}
