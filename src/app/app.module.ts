import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    GreetingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    By,
    TestBed,
    CommonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
