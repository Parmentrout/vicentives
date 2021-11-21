import { UserCalibration } from './user-calibration.model';

export class UserTracking {
    userName: string;
    week: string;
    initialVices: Vice[];
    extraVices: Vice[];
    virtues: Virtue[];
}

export class Vice {
    type: string;
    used: boolean;
}

export class Virtue {
    type: string;
    achieved: boolean;
}