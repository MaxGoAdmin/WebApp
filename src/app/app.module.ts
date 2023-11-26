import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LandingPageModule } from './landing-page/landing-page.module';
import { SigninModule } from './signin/signin.module';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { LandingPageModule } from './landing-page/landing-page.module';
import { SigninModule } from './signin/signin.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactPageModule } from './contact-page/contact-page.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    LandingPageModule,
    SigninModule,
    ReactiveFormsModule,
    FormsModule,

    SigninModule,
    ReactiveFormsModule,
    FormsModule,
    LandingPageModule,
    ContactPageModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
