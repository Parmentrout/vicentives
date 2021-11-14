import { Injectable } from "@angular/core";
import { UserCalibration } from "../models/user-calibration.model";

@Injectable()
export class UserService {
    private readonly key = 'user';

    saveToSession(user: UserCalibration) : void {
        window.localStorage.removeItem(this.key);
        window.localStorage.setItem(this.key, JSON.stringify(user));
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