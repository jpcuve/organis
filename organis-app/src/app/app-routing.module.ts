import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainViewComponent} from "./main-view.component";
import {TerritoryViewComponent} from "./territory-view.component";
import {RoleViewComponent} from "./role-view.component";

const routes: Routes = [
  { path: 'main', component: MainViewComponent },
  { path: 'domains', component: MainViewComponent },
  { path: 'products', component: MainViewComponent },
  { path: 'roles/:id', component: RoleViewComponent },
  { path: 'territories/:id', component: TerritoryViewComponent },
  { path: '**', component: MainViewComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
