import { Component} from "@angular/core";
import { ApiServices } from "../../services/api/api.services";
import { AuthServices } from "../../services/auth/auth.services";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastServices } from "../../services/toast/toast.services";

@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})

export class Profile  {
  public profileForm: FormGroup;

constructor(private api: ApiServices, private auth: AuthServices, private fb: FormBuilder, private toast: ToastServices) {

  this.profileForm = this.fb.group({
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.email],
    gsm: ['', Validators.required]
  });

  /* Get and patch user*/
  this.auth.getUser(true).then((user) => this.profileForm.patchValue(user));
}

  onUpdate(): void {
    this.api.put('users', this.profileForm.value, {})
      .then((user) => this.auth.getUser(true))
      .then(() => this.toast.showToast('Bilgileriniz güncellendi', 2000, 'bottom', false))
      .catch((err) => this.toast.showToast(err ? err : 'Lütfen tekrar deneyin.',3000, 'bottom'))
  }
}
