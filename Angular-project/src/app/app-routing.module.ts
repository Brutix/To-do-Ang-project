import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProductComponent} from './components/product/product.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {ProductGuard} from './product.guard';
import {BusketComponent} from "./components/busket/busket.component";


const routes: Routes = [

  { path: 'product', component: ProductComponent, canActivate: [ProductGuard] },
  { path: 'home', component: HomepageComponent },
  { path: 'busket', component: BusketComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
