import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public showhamburgermenu:boolean = false;
  public shownotifications:boolean = false;
  public showprofileoptions:boolean = false;

  togglehamburgermenu() {

    this.showhamburgermenu = !this.showhamburgermenu;
  }

  toggleNotifications() {

    this.shownotifications = !this.shownotifications;
  }

  toggleProfile() { 
    
    this.showprofileoptions = !this.showprofileoptions; 
  }

}
