import { weeklyHours, timeRange, IweeklyHours } from './../../models/location';
import { googleLocationsDetails } from './../../models/googleLocationDetails';
import { Subject } from 'rxjs/Subject';
import { Business } from './../../models/business';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { BusinessLocationProvider } from './../../providers/business-location/business-location';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import 'rxjs/add/operator/takeWhile';


@IonicPage({
  defaultHistory: ['HomePage']
})
@Component({
  selector: 'page-create-location',
  templateUrl: 'create-location.html',
})
export class CreateLocationPage {

  private business: Business;
  private alive: boolean = true;

  private weeklyHours: weeklyHours;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public businessLocations: BusinessLocationProvider,
    public firebase: FirebaseProvider,
    public modal: ModalController
  ) {
    this.alive = true;
    this.weeklyHours = new weeklyHours();
  }


  ionViewDidLoad() {
    this.firebase.getCurrentUser().then(connection => {
      connection.takeWhile(() => this.alive).subscribe(business => {
        this.business = business;
        console.log(this.business);
      })
    })
  }


  getWeeklyHours() {
    // this.weeklyHours.monday = new timeRange();
    // this.weeklyHours.monday.open = new Date();
    // this.weeklyHours.monday.close = new Date();

    let weeklyHours = this.modal.create("SelectWeeklyHoursPage", { weeklyHours: this.weeklyHours });
    weeklyHours.present();
    weeklyHours.onDidDismiss((data: IweeklyHours) => {
      this.weeklyHours = data;
      console.log(data)
    })
  }

  getLocationModal() {
    let getLocation = this.modal.create("LocationPickerPage");
    getLocation.present();
    getLocation.onDidDismiss((data: googleLocationsDetails) => {
      console.log(data)
    })
  }

  createLocation() {
    if (this.business != null) {


    }
  }



  ionViewDidLeave() {
    this.alive = false;
    console.log("leave")
  }


}
