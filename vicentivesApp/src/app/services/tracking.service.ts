import { UserCalibration } from '../models/user-calibration.model';
import { UserTracking, Vice, Virtue } from '../models/user-tracking.model';

export class TrackingService {
    private readonly key = 'user-tracking';

    saveToSession(user: UserTracking) : void {
      window.localStorage.removeItem(this.key);
      window.localStorage.setItem(this.key, JSON.stringify(user));
    }
  
    getSessionData(): UserTracking {
      let storage: string = window.localStorage.getItem(this.key);
  
      if (storage) {
        return JSON.parse(storage);
      } else {
        return new UserTracking();
      }
    }

    deleteSessionData(): void {
      window.localStorage.removeItem(this.key);
    }

    buildWeeklyTrackingData(calibration: UserCalibration): UserTracking {
        let tracking = this.getSessionData();
        const week = this.getWeek(new Date());
        const monday = week[0].toString(); // i.e. 12-11-18 00:00:00
        if (!tracking || tracking.week !== monday) {
          // Create a new weekly tracking object here
          this.createNewTrackingData(calibration, monday);
        }
        // If not let's just return the current tracking object
        return tracking;
    }

    createNewTrackingData(calibration: UserCalibration, monday: string = '') {
      if (!monday) {
        monday = this.getWeek(new Date())[0].toString();
      }
      let tracking = new UserTracking();
      tracking.userName = calibration.name;
      tracking.week = monday;
      for (let i = 0; i < calibration.viceAmount; i++) {
        let vice = new Vice(calibration.vice);
        tracking.initialVices.push(vice);
      } 

      for (let i = 0; i < calibration.virtueAmount; i++) {
        tracking.virtues.push(new Virtue());
      }
      console.log(tracking);
      this.saveToSession(tracking);
    }

    getWeek(date): Date[]
    {
      // If no date object supplied, use current date
      // Copy date so don't modify supplied date
      const now = date? new Date(date) : new Date();

      // set time to some convenient value
      now.setHours(0,0,0,0);

      // Get the previous Monday
      const monday = new Date(now);
      monday.setDate(monday.getDate() - monday.getDay() + 1);

      // Get next Sunday
      const sunday = new Date(now);
      sunday.setDate(sunday.getDate() - sunday.getDay() + 7);

      return [monday, sunday];
    }
}