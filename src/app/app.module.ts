import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';

import { LandingPageModule } from './landing-page/landing-page.module';

import { SigninModule } from './signin/signin.module';


@NgModule({

  declarations: [
    AppComponent,
  ],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    CoreModule


    SigninModule,

    ReactiveFormsModule,
    FormsModule,
    LandingPageModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
