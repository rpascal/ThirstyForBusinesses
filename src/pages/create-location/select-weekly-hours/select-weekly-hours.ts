import { weeklyHours } from './../../../models/location';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-select-weekly-hours',
  templateUrl: 'select-weekly-hours.html',
})
export class SelectWeeklyHoursPage {

  public weeklyHours: weeklyHours;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {

    this.weeklyHours = navParams.get("weeklyHours");

  }

  ionViewDidLoad() {
  }

  dismiss() {
    this.viewCtrl.dismiss(this.weeklyHours);
  }

}
