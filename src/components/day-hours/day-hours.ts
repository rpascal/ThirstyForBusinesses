import { timeRange, DailyHours } from './../../models/location';
import { Component, ViewChild, ViewChildren, Input, Output, QueryList } from '@angular/core';
import { DateTime } from 'ionic-angular';
import moment from 'moment';
// import { OnInit } from '@angular/core';

@Component({
  selector: 'day-hours',
  templateUrl: 'day-hours.html'
})
export class DayHoursComponent {

  @Input() dailyHours: DailyHours;
  @Input() day: string

  @ViewChildren('open') opens: QueryList<DateTime>;
  @ViewChildren('close') closes: QueryList<DateTime>;

  closed: boolean = false;
  allDay: boolean = false;


  constructor() { }


  addHours() {
    this.dailyHours.hours.push(new timeRange());
  }


  openChange($event, i) {
    var beginningTime = moment(this.dailyHours.hours[i].open);
    var endTime = moment(this.dailyHours.hours[i].close);
    if (this.greaterThan(beginningTime, endTime)) {
      this.opens.toArray()[i].setValue(this.dailyHours.hours[i].close)
    }
  }

  closeChange($event, i) {
    var beginningTime = moment(this.dailyHours.hours[i].open);
    var endTime = moment(this.dailyHours.hours[i].close);
    if (this.lessThan(endTime, beginningTime)) {
      this.closes.toArray()[i].setValue(this.dailyHours.hours[i].open)
    }


    // var beginningTime = moment(this.open.value);
    // var endTime = moment(this.close.value);
    // if (this.lessThan(endTime, beginningTime)) {
    //   this.close.setValue(this.dailyHours.open)
    // }
  }

  minutesOfDay(m) {
    return m.minutes() + m.hours() * 60;
  }

  lessThan(less, greater) {
    return this.minutesOfDay(less) < this.minutesOfDay(greater)
  }

  greaterThan(greater, less) {
    return this.minutesOfDay(greater) > this.minutesOfDay(less)
  }


}
