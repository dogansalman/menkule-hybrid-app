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

  private cordinate : any;

  constructor(public googleMaps: GoogleMaps, public plt: Platform, public geolocation: Geolocation) { }

  ngAfterViewInit() {
    this.plt.ready().then(() => {

      alert('denemeee');

      if(this.setMyPoi) this.cordinate = this.getLocation();


      this.initMap(this.cordinate);
    });
  }

  initMap(cordi) {
     let map: GoogleMap = this.googleMaps.create(this.element.nativeElement);

        map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
        let position = {
          target: cordi,
          zoom: 18
        };
        map.animateCamera(position);

        /* Add User Location Poi*/
        if(this.setMyPoi) {
          let markerOptions: MarkerOptions = {
            position: cordi,
            icon: "assets/images/my-poi.png",
            title: 'Buradasın !'
          };
          map.addMarker(markerOptions)
            .then((marker: Marker) => {
              marker.showInfoWindow();
            });
        }
      });
  }

  getLocation(): any {
    this.geolocation.getCurrentPosition().then((resp) => {
      alert(resp.coords.latitude + " " +  resp.coords.longitude);
      return new LatLng(resp.coords.latitude, resp.coords.longitude)
    }).catch((error) => {
      alert('Üzgünüz! Konumuza erişilemedi. Lütfen konum servisini aktif edin.');
  });
  }
}

