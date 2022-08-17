import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ProductComponent} from "./components/product/product.component";
import {RouterModule} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import {ProductGuard} from './product.guard';
import { BusketComponent } from './components/busket/busket.component';
import { NavigationComponent } from './components/navigation/navigation.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,

    HomepageComponent,
    BusketComponent,
    NavigationComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule
    ],
  providers: [ProductGuard],
  bootstrap: [AppComponent]
})

export class AppModule {}
