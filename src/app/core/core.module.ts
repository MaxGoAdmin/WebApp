import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FootercpyrtsComponent } from './footercpyrts/footercpyrts.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    NavbarComponent,
    FootercpyrtsComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [ 
    NavbarComponent,
    FootercpyrtsComponent 
  ]
})
export class CoreModule { }
