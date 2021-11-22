import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCalibration } from '../models/user-calibration.model';
import { TrackingService } from '../services/tracking.service';
import { UserService } from '../services/user.service';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-calibration',
  templateUrl: './calibration.component.html',
  styleUrls: ['./calibration.component.scss'],
})
export class CalibrationComponent implements OnInit {

  user: UserCalibration;
  formReady: boolean;

  constructor(
    private router: Router, 
    private userService: UserService, 
    private sessionService: SessionService,
    private trackingService: TrackingService) { 
      this.user = this.userService.getUser();
  }

  ngOnInit() {}

  navigate(){
    this.userService.saveToSession(this.user);
    this.trackingService.deleteSessionData();
    this.trackingService.createNewTrackingData(this.user);
    this.sessionService.triggerConfiguration();
    this.router.navigate(['/home']);
  }

  clearSessionData() {
    this.trackingService.deleteSessionData();
    this.user = new UserCalibration();
    this.userService.deleteSessionData();
    this.sessionService.triggerConfiguration();
  }

  isFormReady() {
    return this.user && this.user.name 
      && this.user.vice 
      && this.user.viceAmount > 0
      && this.user.virtueAmount > 0
      && this.user.virtues
  }

}