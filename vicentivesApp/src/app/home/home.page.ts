import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { UserCalibration } from '../models/user-calibration.model';
import { UserTracking, Vice, Virtue } from '../models/user-tracking.model';
import { TrackingService } from '../services/tracking.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  calibration: UserCalibration;
  tracking: UserTracking = new UserTracking();
  weekOf: string;
  showLogin: boolean = true;

  constructor(private userService: UserService, private trackingService: TrackingService, 
    private route: ActivatedRoute) {

    let monday = this.trackingService.getWeek(new Date())[0];
    this.weekOf = `${monday.getMonth()}/${monday.getDate()}/${monday.getFullYear()}`;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(x => this.initializeData());
  }
  initializeData(): void {
    console.log('initializing');
    this.calibration = this.userService.getUser();
    this.tracking = this.trackingService.buildWeeklyTrackingData(this.calibration);
    if (this.calibration && this.calibration.name && this.calibration.vice) {
      this.showLogin = false;
    }
  }

  ngOnDestroy(): void {
  }

  recordVice(vice: Vice) {
    vice.used = true;
    this.trackingService.saveToSession(this.tracking);
  }

  recordVirtue(virtue: Virtue) {
    virtue.achieved = true;
    // If all virtues achieved, add the extra vices
    let allAchieved = true;
    for (let v of this.tracking.virtues) {
      if (!v.achieved) {
        allAchieved = false;
      } 
    }

    // Add extra vices
    if (allAchieved) {
      for (let i = 0; i < this.calibration.virtueAmount; i++) {
        this.tracking.extraVices.push(new Vice());
        this.tracking.virtues.push(new Virtue());
      }

      alert(`Fuck Yeah!  You earned ${this.calibration.virtueAmount} extra vices this week!`);
    
    }
    this.trackingService.saveToSession(this.tracking);
  }
}
