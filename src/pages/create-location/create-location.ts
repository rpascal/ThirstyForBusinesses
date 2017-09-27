import { weeklyHours, timeRange, IweeklyHours, location } from './../../models/location';
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

  public newLocation: location;

  private weeklyHours: weeklyHours = new weeklyHours();

  public phone: any;

  public locationDetails: string;
  public hoursDetails: string;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public businessLocations: BusinessLocationProvider,
    public firebase: FirebaseProvider,
    public modal: ModalController
  ) {
    this.alive = true;
    this.newLocation = new location();







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
    let weeklyHours = this.modal.create("SelectWeeklyHoursPage", { weeklyHours: this.weeklyHours });
    weeklyHours.present();
    weeklyHours.onDidDismiss((data: IweeklyHours) => {
      this.hoursDetails = JSON.stringify(data);

      this.newLocation.hours = data;
      console.log(data)
    })
  }

  getLocationModal() {
    let getLocation = this.modal.create("LocationPickerPage");
    getLocation.present();
    getLocation.onDidDismiss((data: googleLocationsDetails) => {
      this.locationDetails = JSON.stringify(data);

      this.newLocation.address = data.formatted_address;
      this.newLocation.latitude = data.lat;
      this.newLocation.longitude = data.lng;

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
