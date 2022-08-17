import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ProductComponent} from "./components/product/product.component";
import {RouterModule} from "@angular/router";
import { LaptopComponent } from './components/laptop/laptop.component';
import { DesctopComponent } from './components/desctop/desctop.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import {ProductGuard} from './product.guard';
import { BusketComponent } from './components/busket/busket.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LaptopComponent,
    DesctopComponent,
    HomepageComponent,
    BusketComponent
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
