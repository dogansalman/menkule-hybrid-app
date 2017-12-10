import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Search } from './search';
import { ShrinkingHeaderComponentModule } from '../../components/shrinking-header/shrinking-header.module';

@NgModule({
  declarations: [
    Search,
    ShrinkingHeaderComponentModule
  ],
  imports: [
    IonicPageModule.forChild(Search),
    ShrinkingHeaderComponentModule
  ],
  exports: [
    Search
  ]
})
export class SearchModule{ }
