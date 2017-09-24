import { googleLocationsDetails } from './../../../models/googleLocationDetails';
import { GoogleLocationsProvider } from './../../../providers/google-locations/google-locations';
import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-location-picker',
  templateUrl: 'location-picker.html',
})
export class LocationPickerPage {

  query: string;
  places: any = [];


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public zone: NgZone,
    public GoogleLocationsProvider: GoogleLocationsProvider) {
    GoogleLocationsProvider.loadGoogleMaps().then(res => {

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPickerPage');
  }

  dismiss() {
    this.viewCtrl.dismiss({
      blah: "blah"
    });
  }

  searchPlace() {
    this.GoogleLocationsProvider.search(this.query).then(res => {
      this.zone.run(() => {
        this.places = [];
        this.places = res;
      })
    })

  }
  selectPlace(place) {

    this.GoogleLocationsProvider.getSelectedPlaceDetails(place).then(res => {

      var result: googleLocationsDetails = {
        formatted_address: res.formatted_address,
        formatted_phone_number: res.formatted_phone_number,
        international_phone_number: res.international_phone_number,
        lat: res.geometry.location.lat(),
        lng: res.geometry.location.lng(),
        name: res.name,
        url: res.url,
        website: res.website
      }

      this.viewCtrl.dismiss(result);
    });


  }



}
