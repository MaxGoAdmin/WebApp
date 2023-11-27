import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatToolbarModule
  ],
  exports: [ 
    NavbarComponent 
  ]
})
export class CoreModule { }
