import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';

@Component({
    selector: 'search',
    templateUrl: 'search.html'
})

export class Search implements OnInit {
    map: GoogleMap;

    constructor(private googleMaps: GoogleMaps) { }

    ionViewDidLoad() {
      this.loadMap()
    }
 
    ngOnInit(): void { }
   
    loadMap() {
          let mapOptions: GoogleMapOptions = {
            camera: {
              target: {
                lat: 43.0741904,
                lng: -89.3809802
              },
              zoom: 18,
              tilt: 30
            }
          };
      
          this.map = this.googleMaps.create('map', mapOptions);
      
          // Wait the MAP_READY before using any methods.
          this.map.one(GoogleMapsEvent.MAP_READY)
            .then(() => {
              console.log('Map is ready!');
      
              // Now you can use all methods safely.
              this.map.addMarker({
                  title: 'Ionic',
                  icon: 'blue',
                  animation: 'DROP',
                  position: {
                    lat: 43.0741904,
                    lng: -89.3809802
                  }
                })
                .then(marker => {
                  marker.on(GoogleMapsEvent.MARKER_CLICK)
                    .subscribe(() => {
                      alert('clicked');
                    });
                });
      
            });
        }
}