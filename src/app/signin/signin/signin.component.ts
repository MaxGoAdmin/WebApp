import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  constructor(private fb: FormBuilder, private router: Router) {}

  signinForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  // public onSubmit(): void {
  //   let email = this.signinForm.controls['email'].value;
  //   let password = this.signinForm.controls['password'].value;

  //   alert('Email: ' + email + '\nPassword: ' + password);
  // }
  get f() {
    return this.signinForm.controls;
  }
  openSignUp() {
    this.router.navigate(['/signup']);
  }
  redirectForget() {
    this.router.navigate(['/forgot-password']);
  }
  redirectDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
