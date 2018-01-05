import { Component} from "@angular/core";
import { ApiServices } from "../../services/api/api.services";
import { AuthServices } from "../../services/auth/auth.services";
import { ToastServices } from "../../services/toast/toast.services";

@Component({
  selector: 'notification',
  templateUrl: 'notification.html'
})

export class Notification {
  public notifications: any[];

  constructor(private api: ApiServices, private auth: AuthServices, private toast: ToastServices) {
    /* get notifications */
    this.api.get('notifications', {}).then((n) => this.notifications = n);

    /* set all read notifications */
    this.auth.notify.notification = 0;
  }

  onDelete(index, id): void {
    this.api.delete('notifications/' + id, {}, {}).then(() => {
      this.notifications.splice(index, 1);
    });
  }
}
