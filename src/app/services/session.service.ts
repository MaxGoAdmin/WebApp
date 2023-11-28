import { Injectable } from '@angular/core';

const USERNAME = 'Username';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor() {}

  public storeUserName(name: string): void {
    localStorage.setItem(USERNAME, name);
  }

  public getUserName(): string {
    const username = localStorage.getItem(USERNAME);
    return username ? username : '';
  }

  public signOutHandler(): void {
    localStorage.clear();
  }
}
