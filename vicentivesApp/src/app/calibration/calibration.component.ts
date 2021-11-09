import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calibration',
  templateUrl: './calibration.component.html',
  styleUrls: ['./calibration.component.scss'],
})
export class CalibrationComponent implements OnInit {

  user: UserCalibration;;
  private readonly key = 'user';

  constructor(private router: Router) { 
    this.user = this.getUser();
  }

  ngOnInit() {}

  navigate(){
    this.saveToSession();
    this.router.navigate(['/dashboard'])
  }

  saveToSession() : void {
    window.localStorage.removeItem(this.key);
    window.localStorage.setItem(this.key, JSON.stringify(this.user));
  }

  getUser(): UserCalibration {
    let storage: string = window.localStorage.getItem(this.key);

    if (storage) {
      return JSON.parse(storage);
    } else {
      return new UserCalibration();
    }
  }

}

class UserCalibration {
  name: string;
  vice: string;
  viceAmount: number;
  virtues: string[];
  virtueAmount: number;
}