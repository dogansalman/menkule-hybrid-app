import { Component, ViewChild, Input } from '@angular/core';
import {Platform, NavController } from 'ionic-angular';
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
     // this.initMap();
      this.geolocation.getCurrentPosition().then((resp) => {
        alert(resp.coords.latitude);
        alert(resp.coords.longitude);
      }).catch((error) => {
        alert('Üzgünüz! Konumuza erişilemedi. Lütfen konum servisini aktif edin.');
      });
    });
  }

  initMap() {
  //  let map: GoogleMap = this.googleMaps.create(this.element.nativeElement);




    // let coordinates: LatLng = new LatLng(resp.coords.latitude, resp.coords.longitude);
    /*
        map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
        let position = {
          target: coordinates,
          zoom: 17
        };
        map.animateCamera(position);
        let markerOptions: MarkerOptions = {
          position: coordinates,
          icon: "assets/images/my-poi.png",
          title: 'Buradasın !'
        };
        const marker = map.addMarker(markerOptions)
          .then((marker: Marker) => {
            marker.showInfoWindow();
          });
      });
      * */

  }
}

