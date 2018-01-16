import {Component, ViewChild, Input, AfterViewInit, Output, EventEmitter} from '@angular/core';
import { Platform } from 'ionic-angular';
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
  @Input('autoAddMarker') autoAddMarker: boolean = false;
  @Input('editableMark') editableMark: boolean = false;
  @Output('selectedPosition') selectedPosition: EventEmitter<object> = new EventEmitter<object>();
  private map: GoogleMap;

  constructor(public googleMaps: GoogleMaps, public plt: Platform, public geolocation: Geolocation) { }

  ngAfterViewInit() {
    this.plt.ready().then(() => {
      if(this.setMyPoi) this.initMyLocation();
      else this.initMap();
    });
  }

  initMap() {
    this.map = this.googleMaps.create(this.element.nativeElement);

    this.map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
      // set map position
      this.map.moveCamera({target: this.position, zoom: this.zoom, duration: 0});

      // set my location
      if(this.setMyPoi) this.addMarker(this.position, 'assets/images/my-poi.png', 'Buradasınız!','DROP');

      if(this.autoAddMarker) this.addMarker(this.position, 'assets/images/advert-poi.png', null,'DROP');
    });

    // on click add marker
    if(this.addMark) {
        this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe((_position) => {
          this.map.clear();
          this.addMarker(_position[0],'assets/images/advert-poi.png',null,'DROP');
          this.selectedPosition.emit(_position[0]);
        });
    }
  }
  addMarker(poi, iconPath, title, animate): void {
    let markerOptions: MarkerOptions = {
      position: poi,
      icon: iconPath,
      title: title,
      animation: animate,
      draggable: true
    };
    this.map.addMarker(markerOptions)
      .then((marker: Marker) => {
        if(title) marker.showInfoWindow();
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
