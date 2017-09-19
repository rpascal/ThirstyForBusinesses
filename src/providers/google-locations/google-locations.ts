import { ENVIRONMENT } from './../../environments/environment.default';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { ConnectivityServiceProvider } from '../connectivity-service/connectivity-service';
declare var google;


@Injectable()
export class GoogleLocationsProvider {


  private autocompleteService: any;
  private placesService: any;


  initServices(){
    this.autocompleteService = new google.maps.places.AutocompleteService();
    this.placesService = new google.maps.places.PlacesService(document.createElement('div'));
  }


  constructor(public connectivityService: ConnectivityServiceProvider) {
  }

  loadGoogleMaps(): Promise<any> {

    return new Promise((resolve) => {

      if (typeof google == "undefined" || typeof google.maps == "undefined") {


        if (this.connectivityService.isOnline()) {

          window['mapInit'] = () => {
            this.initServices();
            resolve(true);
          }

          let script = document.createElement("script");
          script.id = "googleMaps";

          if (ENVIRONMENT.googleMapsAPIKey) {
            script.src = 'http://maps.google.com/maps/api/js?key=' + ENVIRONMENT.googleMapsAPIKey + '&callback=mapInit&libraries=places';
          } else {
            script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
          }

          document.body.appendChild(script);

        }
      } else {
        if (this.connectivityService.isOnline()) {
          resolve(true);
        }
        else {

        }
      }

      this.addConnectivityListeners();

    });

  }


  addConnectivityListeners(): void {

    this.connectivityService.watchOnline().subscribe(() => {

      setTimeout(() => {

        if (typeof google == "undefined" || typeof google.maps == "undefined") {
          this.loadGoogleMaps();
        }
        else {
        }

      }, 2000);

    });

    this.connectivityService.watchOffline().subscribe(() => {
    });

  }


  
  search(searchText): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (searchText.length > 0) {
        let config = {
          types: ['geocode'],
          input: searchText
        }
        this.autocompleteService.getPlacePredictions(config, (predictions, status) => {
          if (status == google.maps.places.PlacesServiceStatus.OK && predictions) {
            resolve(predictions);
          }
        });
      } else {
        resolve([])
      }
    })
  }

  getSelectedPlaceDetails(place) {


    return new Promise<any>((resolve, reject) => {
      let location = {
        lat: null,
        lng: null,
        name: place.name
      };

      this.placesService.getDetails({ placeId: place.place_id }, (details) => {

        location.name = details.name;
        location.lat = details.geometry.location.lat();
        location.lng = details.geometry.location.lng();

        resolve(details);

      });

    })

  }



}
