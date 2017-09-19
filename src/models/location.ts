export interface location{
    _uid : string;    
    address : string;
    latitude : number;
    longitude : number; 
    hours : weeklyHours;
    phone : string;
    imgPath : string;
}

export interface timeRange{
    open : Date;
    close : Date;
}

export interface weeklyHours {
    monday : timeRange;
    tuesday : timeRange;
    wednesday : timeRange;
    thursday : timeRange;
    friday : timeRange;
    saturday : timeRange;
    sunday : timeRange;
}