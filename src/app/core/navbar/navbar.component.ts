import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router) {}
  public showhamburgermenu: boolean = false;
  public shownotifications: boolean = false;
  public showprofileoptions: boolean = false;

  togglehamburgermenu(): void {
    this.showhamburgermenu = !this.showhamburgermenu;
  }

  toggleNotifications(): void {
    this.shownotifications = !this.shownotifications;
    if (this.shownotifications == true) {
      this.showprofileoptions = false;
    }
  }

  toggleProfile(): void {
    this.showprofileoptions = !this.showprofileoptions;

    if (this.showprofileoptions == true) {
      this.shownotifications = false;
    }
  }

  public logoutHandler(): void {
    this.router.navigate(['/signin']);
  }
}
