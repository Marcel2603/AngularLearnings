import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {HasRoleDirective} from "../../directives/has-role.directive";
import {HasRoleDirectiveModule} from "../../directives/has-role.directive.module";
import {RouterLinkWithHref} from "@angular/router";

@NgModule(
  {
    declarations: [HomeComponent],
    imports: [
      HasRoleDirectiveModule,
      RouterLinkWithHref
    ],
    exports: [HomeComponent]
  }
)
export class HomeModule{

}
