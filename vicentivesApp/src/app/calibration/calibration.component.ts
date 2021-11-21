import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCalibration } from '../models/user-calibration.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-calibration',
  templateUrl: './calibration.component.html',
  styleUrls: ['./calibration.component.scss'],
})
export class CalibrationComponent implements OnInit {

  user: UserCalibration;

  constructor(private router: Router, private userService: UserService) { 
    this.user = this.userService.getUser();
  }

  ngOnInit() {}

  navigate(){
    this.userService.saveToSession(this.user);
    this.router.navigate(['/home'])
  }

}