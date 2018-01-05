import {Component, OnInit} from '@angular/core';
import { Search } from "../search/search";
import { Login } from '../login/login';
import { AuthServices } from "../../services/auth/auth.services";
import { Profile } from "../profile/profile";
import { Notification } from "../notification/notification";

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class Tabs implements OnInit  {

  /* tab pages */
  tab1Root = Search;
  tabNotification = Notification;
  tab3Root = Login;
  tabProfile = Profile;


  constructor(public auth: AuthServices) { }

  ngOnInit(): void {
  }
}
