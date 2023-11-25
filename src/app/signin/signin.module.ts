import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [{ path: '', component: SigninComponent }];

@NgModule({
  declarations: [SigninComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [SigninComponent, RouterModule],
})
export class SigninModule {}
