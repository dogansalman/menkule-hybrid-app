import {Component, ViewChild, Renderer2} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastServices } from "../../../services/toast/toast.services";
import { ApiServices } from "../../../services/api/api.services";
import {Slides, ViewController, Events} from "ionic-angular";
import { ModalController } from "ionic-angular";
import { Location } from "../location/location";

@Component({
  selector: 'advert',
  templateUrl: 'advert.html'
})

export class Advert {
  public advertForm: FormGroup;
  @ViewChild('pageSlider') pageSlider: Slides;
  tabs: any = '0';
  public position: any;

  constructor(private api: ApiServices, private toast: ToastServices, private fb: FormBuilder, private view: ViewController, private modalController: ModalController, private ren: Renderer2, private evt: Events) {

    // advert form rules
    this.advertForm = this.fb.group({
      id: [null],
      title: [null, Validators.required],
      advert_type_id: [null, Validators.required],
      adress: [null, Validators.required],
      city_id: [null, Validators.required],
      town_id: [null, Validators.required],
      min_layover: [null, Validators.required],
      cancel_time: [null, Validators.required],
      price: [null, Validators.required],
      entry_time: [null, Validators.required],
      exit_time: [null, Validators.required],
      description: [null, Validators.required],
      zoom: [12, Validators.required],
      latitude: [null, Validators.required],
      longitude: [null, Validators.required],
      state: [null, Validators.required],
      views: [null],
      score: [null],
      created_date: [null],
      updated_date: [null],
      properties: this.fb.group({
        visitor: [null, Validators.required],
        bathroom: [null, Validators.required],
        m2: [null, Validators.required],
        beds: [null, Validators.required],
        bedroom: [null, Validators.required],
        build_age: [null, Validators.required],
        floor: [null, Validators.required],
        room: [null, Validators.required],
        hall: [null, Validators.required],
      }),
      possibility: this.fb.group({
        internet: [false, Validators.required],
        air: [false, Validators.required],
        tv: [false, Validators.required],
        requiments: [false, Validators.required],
        heat: [false, Validators.required],
        kitchen: [false, Validators.required],
        gym: [false, Validators.required],
        elevator: [false, Validators.required],
        jacuzzi: [false, Validators.required],
        smoke: [false, Validators.required],
        pet: [false, Validators.required],
      })
    })

    // listening location selection
    this.evt.subscribe('map:marker', (selectedLocation) => {
      this.position = selectedLocation;
      this.advertForm.patchValue({latitude: selectedLocation.lat,longitude: selectedLocation.lng});
    })
  }
  ngAfterViewInit() {
    this.pageSlider.autoHeight = true;
  }

  dismiss(): void {
    this.view.dismiss();
  }
  onAddLocation(position): void {
    // fix ionic native maps displaying
    this.ren.setStyle(document.getElementsByTagName("ion-modal")[0],'opacity','0');
    let modal = this.modalController.create(Location, {position: position});
    modal.onDidDismiss(() => {
      this.ren.setStyle(document.getElementsByTagName("ion-modal")[0],'opacity','1');
    });
    modal.present();
  }
  changeWillSlide($event) {
    this.tabs = $event._snapIndex.toString();
    this.selectTab($event._snapIndex);
    for(let i = 0; i < document.getElementsByTagName("ion-segment-button").length; i++) {
      this.ren.removeClass(document.getElementsByTagName("ion-segment-button")[i],'segment-activated')
    }
    this.ren.addClass(document.getElementsByTagName("ion-segment-button")[$event._snapIndex], 'segment-activated');
  }
  selectTab(index) {
    this.pageSlider.slideTo(index);
  }
  onAddAdvert(): void {
    console.log(this.advertForm.value);
  }

}
