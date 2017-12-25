import { Component } from "@angular/core";
import { ApiServices } from "../../services/api/api.services";
import { ToastServices } from "../../services/toast/toast.services";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController } from "ionic-angular";
import { Tabs } from "../tabs/tabs";
import { Main } from "../main/main";
import { AuthServices } from "../../services/auth/auth.services";

@Component({
  selector: 'activation',
  templateUrl: 'activation.html'
})

export class Activation {

  public activationForm: FormGroup;

  constructor(private api: ApiServices, private toast: ToastServices, private fb: FormBuilder, private nav: NavController, private auth: AuthServices) {
    this.activationForm = this.fb.group({
      code: [null, Validators.required]
    });
  }

  OnActivate(): void {
    this.api.post('users/approve/gsm', this.activationForm.value, {})
      .then(() => this.toast.showToast('Üyeliğiniz akktif edildi.', 3000, 'bottom'))
      .then(() => setTimeout(() => { this.nav.setRoot(Tabs,{}, {animate:true, animation:'md-transition', direction: 'none', duration:500})}, 3000))
      .catch((err) => this.toast.showToast( 'Aktivasyon kodu hatalı.',4000, 'bottom'));
  }
  onLogOut(): void {
    this.auth.deleteToken();
    this.auth.deleteUser();
    this.nav.setRoot(Main, {}, {animate: true, animation: 'animated fadeIn', direction: 'none', duration: 500})
  }
  onResendCode(): void {
    this.api.get('users/validate/gsm/send', {}).then(() => this.toast.showToast('Aktivasyon kodu gönderildi.', 3000, 'bottom'))
      .catch((err) => this.toast.showToast('Yeni aktivasyon kodu için 4 dakika beklemeniz gerekmektedir.',3000, 'bottom') )
  }
}
