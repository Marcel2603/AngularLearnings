import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SecondComponent} from "./pages/second/second.component";
import {AuthGuard} from "./guard/auth.guard";
import {ErrorComponent} from "./pages/error/error.component";

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent, canActivate: [AuthGuard]},
  {path: "second", component: SecondComponent, canActivate: [AuthGuard]},
  {path: "error", component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
