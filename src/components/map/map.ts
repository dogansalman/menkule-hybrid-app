import { Component, ViewChild, Input, AfterViewInit } from '@angular/core';
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



export class Map implements AfterViewInit {

  @ViewChild('map') element;
  @Input('setMyPoi') setMyPoi: boolean = false;
  @Input('position') position: any = new LatLng(39.542088, 34.525015);
  @Input('zoom') zoom: any = 6;
  @Input('addMark') addMark: boolean = false;
  @Input('editableMark') editableMark: boolean = false;


  constructor(public googleMaps: GoogleMaps, public plt: Platform, public geolocation: Geolocation) { }

  ngAfterViewInit() {
    this.plt.ready().then(() => {
      if(this.setMyPoi) this.initMyLocation();
      else this.initMap();
    });
  }

  initMap() {
     let map: GoogleMap = this.googleMaps.create(this.element.nativeElement);
        map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
        let position = {
          target: this.position,
          zoom: this.zoom,
          duration: 0
        };
        map.moveCamera(position);

        if(this.setMyPoi) {
          let markerOptions: MarkerOptions = {
            position: this.position,
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

  initMyLocation(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.position = new LatLng(resp.coords.latitude, resp.coords.longitude);
      this.zoom = 12;
      this.initMap();
    }).catch((error) => {
        console.log(error);
    });
  }

}
