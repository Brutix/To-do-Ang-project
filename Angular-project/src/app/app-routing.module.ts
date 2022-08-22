import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';



const appRoutes: Routes =[
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
]
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
  ],
})

export class AppRoutingModule { }
