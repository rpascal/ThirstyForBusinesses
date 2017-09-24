import moment from 'moment';



export interface location {
    _uid: string;
    address: string;
    latitude: number;
    longitude: number;
    hours: IweeklyHours;
    phone: string;
    imgPath: string;
}

export class timeRange {
    open: any;
    close: any;

    constructor() {
        this.open = moment().utc(false).hour(8).minute(0).toISOString();//.toISOString();
        this.close = moment().utc(false).hour(22).minute(0).toISOString();//.toISOString();
    }
}

export class DailyHours {
    hours: Array<timeRange>;
    allDay: boolean = false;
    closed: boolean = false;

    constructor() {
        this.hours = new Array<timeRange>();
    }
}

export interface IweeklyHours {
    monday: DailyHours;
    tuesday: DailyHours;
    wednesday: DailyHours;
    thursday: DailyHours;
    friday: DailyHours;
    saturday: DailyHours;
    sunday: DailyHours;
}

export class weeklyHours implements IweeklyHours {
    monday: DailyHours;
    tuesday: DailyHours;
    wednesday: DailyHours;
    thursday: DailyHours;
    friday: DailyHours;
    saturday: DailyHours;
    sunday: DailyHours;
    constructor() {
        this.monday = new DailyHours();
        this.tuesday = new DailyHours();
        this.wednesday = new DailyHours();
        this.thursday = new DailyHours();
        this.friday = new DailyHours();
        this.saturday = new DailyHours();
        this.sunday = new DailyHours();

    }
}