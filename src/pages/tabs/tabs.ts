import {Component, OnInit} from '@angular/core';
import { Search } from "../search/search";
import { Login } from '../login/login';
import { Events } from "ionic-angular";
import { AuthServices } from "../../services/auth/auth.services";

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class Tabs implements OnInit  {

  /* tab pages */
  tab1Root = Search;
  tab2Root = Login;
  tab3Root = Login;

  /* message & notifications */
  public messages: number = 0;
  public notifications: number = 0;

  constructor(private evt: Events, private auth: AuthServices) {

    /* event listener */
    this.evt.subscribe('new:message', (message) => {
      this.messages += message;
    });
    this.evt.subscribe('new:notification', (notification) => {
      this.notifications += notification;
    });

    /* get user */
    this.auth.getUser(true).then((user) => {
      this.evt.publish('new:message', user.notification_size);
      this.evt.publish('new:notification', 6);
    });
  }

  ngOnInit(): void {  }
}
