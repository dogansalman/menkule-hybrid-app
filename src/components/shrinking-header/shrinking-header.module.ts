import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShrinkingHeaderComponent } from './shrinking-header';

@NgModule({
  declarations: [
    ShrinkingHeaderComponent,
  ],
  imports: [
    IonicPageModule.forChild(ShrinkingHeaderComponent),
  ],
  exports: [
    ShrinkingHeaderComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ShrinkingHeaderComponentModule {}
