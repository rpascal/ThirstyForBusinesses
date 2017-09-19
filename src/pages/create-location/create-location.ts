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

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public businessLocations: BusinessLocationProvider,
    public firebase: FirebaseProvider,
    public modal : ModalController
  ) {
    this.alive = true;
  }

  presentProfileModal() {
    let profileModal = this.modal.create("LocationPickerPage");
    profileModal.present();
    profileModal.onDidDismiss(data=>{
      console.log(data)
    })
  }

  ionViewDidLoad() {
    this.firebase.getCurrentUser().then(connection => {
      connection.takeWhile(() => this.alive).subscribe(business => {
        this.business = business;
        console.log(this.business);
      })
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
