import { UserTracking } from '../models/user-tracking.model';

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

    buildWeeklyTrackingData(): UserTracking {
        const tracking = this.getSessionData();
        const week = this.getWeek(new Date());
        const monday = week[0].toString();
        if (!tracking || tracking.week !== monday) {
          // Create a new weekly tracking object here
        }
        // If not let's just return the current tracking object
        return tracking;
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