import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LaptopComponent} from './components/laptop/laptop.component';
import {DesctopComponent} from './components/desctop/desctop.component';
import {ProductComponent} from './components/product/product.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {ProductGuard} from './product.guard';


const routes: Routes = [
  { path: 'laptop', component: LaptopComponent },
  { path: 'desktop', component: DesctopComponent },
  { path: 'product', component: ProductComponent, canActivate: [ProductGuard] },
  { path: 'home', component: HomepageComponent },
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
