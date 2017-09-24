import { weeklyHours } from './../../../models/location';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, RangeKnob, Range, ViewController, DateTime } from 'ionic-angular';

import moment from 'moment';

/**
 * Generated class for the SelectWeeklyHoursPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-weekly-hours',
  templateUrl: 'select-weekly-hours.html',
})
export class SelectWeeklyHoursPage {

  // @ViewChild("mondayEnd") mondayEnd: DateTime;

  public weeklyHours: weeklyHours;

  // public min: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {


    this.weeklyHours = navParams.get("weeklyHours");


    // this.min = moment(this.weeklyHours.monday.open).toISOString()
    // console.log(this.min)

  }

  // minutesOfDay(m) {
  //   return m.minutes() + m.hours() * 60;
  // }

  // lessThan(greater, less) {
  //   return this.minutesOfDay(greater) > this.minutesOfDay(less)
  // }

  // onAccept($event) {

  //   var beginningTime = moment(this.weeklyHours.monday.open).utc();
  //   var endTime = moment(this.weeklyHours.monday.close).utc();
  //   // console.log(beginningTime)
  //   console.log(this.minutesOfDay(beginningTime) > this.minutesOfDay(endTime))

  //   // console.log(endTime.isBefore(beginningTime))

  //   if (this.lessThan(beginningTime, endTime)) {

  //     this.mondayEnd.setValue(this.weeklyHours.monday.open)
  //     //
  //     // console.log(this.weeklyHours.monday.open)
  //     // this.weeklyHours.monday.close = this.weeklyHours.monday.open;
  //     // console.log(this.weeklyHours.monday.close)

  //   }

  //   // if (moment($event).isBefore(moment(this.weeklyHours.monday.open))) {

  //   //   console.log(moment($event))

  //   // }


  // }

  submit() {
    console.log(this.weeklyHours.monday);

  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SelectWeeklyHoursPage');
  }

  dismiss() {
    this.viewCtrl.dismiss(this.weeklyHours);
  }

}
