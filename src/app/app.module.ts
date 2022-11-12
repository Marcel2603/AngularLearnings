import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SecondComponent} from './pages/second/second.component';
import {HomeModule} from "./pages/home/home.module";
import {HasRoleDirectiveModule} from "./directives/has-role.directive.module";
import {RoleService} from "./services/role.service";
import { ErrorComponent } from './pages/error/error.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HasRoleDirectiveModule,
    HttpClientModule
  ],
  providers: [RoleService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
