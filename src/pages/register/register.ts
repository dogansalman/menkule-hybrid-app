import { Component, OnInit} from '@angular/core';
import { NavController, Events } from 'ionic-angular';
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

  constructor(private navCtrl: NavController, private auth: AuthServices, private toast: ToastServices, private api: ApiServices, private fb: FormBuilder, private evt: Events){
    /* register form */
    this.registerForm = this.fb.group({
      name: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      gsm: [null, [Validators.minLength(10), Validators.maxLength(10), Validators.required]],
      gender: [null, [Validators.required]],
      password: [null, [Validators.required]],
      reply: [null, [Validators.required]]
    })
  }
  ngOnInit() { }
  onRegister(): any {
    if(this.registerForm.value.password != this.registerForm.value.reply) {
      this.toast.showToast('Şifre tekrarını kontrol ediniz.', 2000, 'bottom');
      return;
    }
    this.api.post('users', this.registerForm.value, {})
      .then(() => this.api.post('auth', {username: this.registerForm.value.email, password: this.registerForm.value.password, grant_type: 'password'}, {'Content-Type': 'application/x-www-form-urlencoded'}))
      .then((token) => this.auth.setToken(token))
      .then(() => this.api.get('users', {}))
      .then((user) => this.auth.setUser(user) && this.evt.publish('user:login', Object.assign(user, {is_new: true})))
      .catch((err) => this.toast.showToast(err ? err : 'Beklenmedik bir hata oluştu. Daha sonra tekrar deneyin',3000, 'bottom'))
  }
}
