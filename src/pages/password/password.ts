import { Component } from "@angular/core";
import { ApiServices } from "../../services/api/api.services";
import { ToastServices } from "../../services/toast/toast.services";
import { ViewController} from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'password',
  templateUrl: 'password.html'
})

export class Password {

  public passwordForm: FormGroup;

  constructor(private api: ApiServices, private toast: ToastServices, private view: ViewController, private fb: FormBuilder) {
    this.passwordForm = this.fb.group({
      currentpassword: ['', Validators.required],
      password: ['', Validators.required],
      reply: ['', Validators.required],
    });
  }

  onChangePass(): void {
    if(this.passwordForm.value.password != this.passwordForm.value.reply) {
      this.toast.showToast('Şifre tekrarı hatalı', 2000, 'bottom');
      return;
    }

    this.api.put('users/password/reset', this.passwordForm.value, {})
      .then(() => this.dismiss())
      .then(() => this.toast.showToast('Şifreniz güncellendi', 2000, 'bottom', false))
      .catch((err) => this.toast.showToast(err ? err : 'Lütfen tekrar deneyin.',3000, 'bottom'));
  }

  dismiss(): void {
    this.view.dismiss();
  }
}
