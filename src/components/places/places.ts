import { Component, NgZone, ElementRef } from '@angular/core';
import { LoaderServices } from "../../services/loader/loader.services";

declare var google:any;

@Component({
  selector: 'ion-google-places',
  templateUrl: 'places.html'
})

export class Places {

  autocomplete: any;
  GoogleAutocomplete: any;
  GooglePlaces: any;
  geocoder: any
  autocompleteItems: any;
  nearbyItems: any = new Array<any>();

  constructor(
    public zone: NgZone,
    public load : LoaderServices,
    public el: ElementRef,
  ) {

    this.geocoder = new google.maps.Geocoder;
    let elem = document.createElement("div")
    this.GooglePlaces = new google.maps.places.PlacesService(elem);
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = {
      input: ''
    };
    this.autocompleteItems = [];
  }

  updateSearchResults() {
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input , componentRestrictions: {country: 'tr'}, types: ['(cities)']},
      (predictions, status) => {
        this.autocompleteItems = [];
        if(!predictions) return;
        console.log(predictions);
        predictions.forEach(p => {
          const first = p.description.split(',')[0].toLocaleLowerCase();
          if(first.indexOf(this.autocomplete.input.toLocaleLowerCase()) > -1) this.zone.run(() => this.autocompleteItems.push(p));
        })
      });
  }

  selectSearchResult(item){
    this.autocomplete.input = item.structured_formatting.main_text;
    console.log(item);
    this.load.showLoading();
    this.autocompleteItems = [];
    this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
      if(status === 'OK' && results[0]){
        this.autocompleteItems = [];
        this.GooglePlaces.nearbySearch({
          location: results[0].geometry.location,
          radius: 500,
          key: 'AIzaSyBWsnpeDue8z9EevJ74Aj7uo5cJFv0p9K0',
          sensor: false,
          types: ['(cities)']
        }, (near_places) => {
          this.zone.run(() => {
            this.nearbyItems = [];
            for (var i = 0; i < near_places.length; i++) {
              this.nearbyItems.push(near_places[i]);
            }
            this.load.dismissLoading();
          });
        })
      }
    })
  }


}
