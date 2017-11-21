import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Register } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  constructor(public navCtrl: NavController) {
  }
  ngOnInit() {
  }

  onRegister(): void {
    this.navCtrl.push(Register, {},{animate:true, animation:'md-transition', direction: 'none', duration:1000});
  }

  swipeEvent(e) {
    if (e.direction == 2) {
      alert('tested');
    }
  }

}
