import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiServices } from "../../services/api/api.services";
import { ToastServices } from "../../services/toast/toast.services";

@Component({
    selector: 'forgot',
    templateUrl: 'forgot.html'
})

export class Forgot implements OnInit {

  public forgotForm: FormGroup;

    constructor(public navCtrl: NavController, private fb: FormBuilder, private api: ApiServices, private toast: ToastServices) {
        this.forgotForm = this.fb.group({
          'email': [null, Validators.required]
        })
    }
    ngOnInit(): void { }

    onForgot() {
      this.api.post('users/password/forgot', this.forgotForm.value, {})
        .then(() => this.toast.showToast('Yeni şifre talebiniz alındı. E-posta adresinizi kontrol ediniz.',4000, 'bottom'))
        .catch((err) => this.toast.showToast(err ? err : 'E-posta adresi bulunamadı.',4000, 'bottom'));
    }
    onNewCode(): void {

    }
}
