import { UserCalibration } from './user-calibration.model';

export class UserTracking {
    userName: string;
    week: string;
    initialVices: Vice[] = [];
    extraVices: Vice[] = [];
    virtues: Virtue[] = [];
}

export class Vice {
    constructor(type: string = '') {
        this.type = type;
        this.used = false;
    }
    type: string;
    used: boolean;
}

export class Virtue {
    constructor() {
        this.achieved = false;
    }
    type: string;
    achieved: boolean;
}