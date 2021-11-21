import { Component, OnInit } from '@angular/core';
import { UserCalibration } from '../models/user-calibration.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  calibration: UserCalibration;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.calibration = this.userService.getUser();
    console.log(this.calibration);
  }
}
