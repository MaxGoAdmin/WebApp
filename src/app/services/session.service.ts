import { Injectable } from '@angular/core';

const USERNAME = 'Username';
const ISLOGEDIN = 'LogedIn';

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

  public userAuthenticated(): void {
    localStorage.setItem(ISLOGEDIN, JSON.stringify(true));
  }

  public getUserAuth(): boolean {
    const auth = localStorage.getItem(ISLOGEDIN);
    return auth ? JSON.parse(auth) : false;
  }

  public signOutHandler(): void {
    localStorage.clear();
  }
}
