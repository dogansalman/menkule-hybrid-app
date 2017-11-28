import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import {
    GoogleMaps,
    GoogleMap,
    GoogleMapsEvent,
    Marker,
    GoogleMapsAnimation,
    MyLocation
   } from '@ionic-native/google-maps';

@Component({
    selector: 'search',
    templateUrl: 'search.html'
})

export class Search implements OnInit {
    mapReady: boolean = false;
    map: GoogleMap;

    constructor(private googleMaps: GoogleMaps, private platform: Platform) {
        this.platform.ready().then(() => this.onPlatformReady());
    }

    ngOnInit(): void {
    }
    ngAfterViewInit(){
       
    }
    ionViewDidLoad() {
        
     }
 

    onPlatformReady(): void {
        this.loadMap();
    }

    loadMap() {
        // Create a map after the view is loaded.
        // (platform is already ready in app.component.ts)
        this.map = this.googleMaps.create('map_canvas', {
          camera: {
            target: {
              lat: 43.0741704,
              lng: -89.3809802
            },
            zoom: 18,
            tilt: 30
          }
        });
    
        // Wait the maps plugin is ready until the MAP_READY event
        this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
          this.mapReady = true;
        });
      }
}