import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private sessionService: SessionService) {}
  userName: string = '';
  public showhamburgermenu: boolean = false;
  public shownotifications: boolean = false;
  public showprofileoptions: boolean = false;

  ngOnInit(): void {
    if (this.sessionService.getUserName()) {
      this.userName = this.sessionService.getUserName();
    }
  }

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
    this.sessionService.signOutHandler();
    this.router.navigate(['/signin']);
  }
}
