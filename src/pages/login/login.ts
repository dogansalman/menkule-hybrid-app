import { Component, OnInit, ViewChildren } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Forgot } from '../forgot/forgot';
import { ApiServices} from "../../services/api/api.services";
import { FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
    selector: 'login',
    templateUrl: 'login.html'
})
export class Login implements OnInit {

    /* Login form */
    public loginForm: FormGroup;

    constructor(public navCtrl: NavController, public api: ApiServices, private formBuilder: FormBuilder) {
      this.loginForm = this.formBuilder.group({
        'username': [null, Validators.required],
        'password': [null, Validators.required],
        'grant_type': ['password', Validators.required]
      })
    }

    ngOnInit(): void {  }
    onForgot(): void {
        this.navCtrl.push(Forgot, {}, {animate: true, animation: 'animated fadeIn', direction: 'none', duration: 500});
    }
    onLogin(): void {
     this.api.post('auth', this.loginForm.value, {'Content-Type': 'application/x-www-form-urlencoded'});
    }


}
