import { Component } from '@angular/core';
import { Search } from "../search/search";
import { Login } from '../login/login';


@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class Tabs {

  tab1Root = Search;
  tab2Root = Login;
  tab3Root = Login;

  constructor() {

  }
}
