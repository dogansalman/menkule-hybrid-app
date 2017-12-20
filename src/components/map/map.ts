import { Component, ViewChild, Input } from '@angular/core';
import {Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

@Component({
  templateUrl: 'map.html',
  selector: 'google-map-component',
  providers: [ GoogleMaps, Geolocation ]
})



export class Map{

  @ViewChild('map') element;
  @Input('setMyPoi') setMyPoi: boolean;

  constructor(public googleMaps: GoogleMaps, public plt: Platform, public geolocation: Geolocation) { }

  ngAfterViewInit() {
    this.plt.ready().then(() => {
      if(this.setMyPoi) {
        this.geolocation.getCurrentPosition().then((resp) => {
          this.initMap(new LatLng(resp.coords.latitude, resp.coords.longitude));
        }).catch((error) => {
         //todo save error log file
        });
      } else {
        this.initMap(null);
      }
    });
  }

  initMap(cordi) {
     let map: GoogleMap = this.googleMaps.create(this.element.nativeElement);
        map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
        let position = {
          target: cordi,
          zoom: 16
        };
        map.animateCamera(position);

        if(this.setMyPoi) {
          let markerOptions: MarkerOptions = {
            position: cordi,
            icon: "assets/images/my-poi.png",
            title: 'Buradasın !',
            animation: 'DROP',

          };
          map.addMarker(markerOptions)
            .then((marker: Marker) => {
              marker.showInfoWindow();
            });
        }


      });
  }


}
