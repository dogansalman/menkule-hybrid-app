import {ModuleWithProviders, NgModule} from "@angular/core";
import { UserRequiredDirective } from "./user-required.directive";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [ CommonModule ],
  declarations: [ UserRequiredDirective ],
  exports: [ UserRequiredDirective ],
})

export class UserRequiredModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UserRequiredModule,
      providers: []
    }
  }
}
