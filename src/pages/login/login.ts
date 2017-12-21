import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Forgot } from '../forgot/forgot';
import { ApiServices} from "../../services/api/api.services";
import { FormGroup, FormBuilder, Validators} from "@angular/forms";
import { Tabs } from "../tabs/tabs";
import { ToastServices } from "../../services/toast/toast.services";
import { AuthServices } from "../../services/auth/auth.services";
import { Events } from "ionic-angular";

@Component({
    selector: 'login',
    templateUrl: 'login.html'
})
export class Login implements OnInit {

    /* Login form */
    public loginForm: FormGroup;

    constructor(public navCtrl: NavController,
                public api: ApiServices,
                private formBuilder: FormBuilder,
                private _toast: ToastServices,
                private auth: AuthServices,
                private evt: Events) {
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
       this.api.post('auth', this.loginForm.value, {'Content-Type': 'application/x-www-form-urlencoded'})
         .then((token) => this.auth.setToken(token))
         .then(() => this.api.get('users', {}))
         .then((user) => this.auth.setUser(user) && this.evt.publish('user:login', user))
         .then(() => this.navCtrl.setRoot(Tabs, {}, {animate: true, animation: 'animated fadeIn', direction: 'none', duration: 500}))
        .catch((err) => {
         this._toast.showToast('Eposta veya şifre hatalı.',3000, 'bottom');
       });
    }


}
