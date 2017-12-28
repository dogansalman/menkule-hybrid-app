import { Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { ApiServices } from "../../services/api/api.services";
import { AuthServices } from "../../services/auth/auth.services";
import { ToastServices } from "../../services/toast/toast.services";
import { Activation } from "../activation/activation";

@Component({
  selector: 'register',
  templateUrl: 'register.html'
})

export class Register implements OnInit {
  public registerForm: FormGroup;

  constructor(private navCtrl: NavController, private auth: AuthServices, private toast: ToastServices, private api: ApiServices, private fb: FormBuilder){
    /* register form */
    this.registerForm = this.fb.group({
      name: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      gsm: [null, [Validators.minLength(10), Validators.maxLength(10), Validators.required]],
      gender: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }
  ngOnInit() { }
  onRegister(): any {
    this.api.post('users', this.registerForm.value, {})
      .then(() => this.navCtrl.setRoot(Activation, {}, {animate:true, animation:'md-transition', direction: 'none', duration:500}))
      .catch((err) => this.toast.showToast(err ? err : 'Beklenmedik bir hata oluştu. Daha sonra tekrar deneyin',3000, 'bottom'))
  }
}
