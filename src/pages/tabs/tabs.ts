import {Component, OnInit} from '@angular/core';
import { Search } from "../search/search";
import { Login } from '../login/login';
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


  constructor(public auth: AuthServices) { }

  ngOnInit(): void {
  }
}
