import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const USERNAME = 'Username';
const ISLOGEDIN = 'LogedIn';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
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

  public setLoadingState(loading: boolean): void {
    this.isLoading.next(loading);
  }

  public get hasLoading(): Observable<boolean> {
    return this.isLoading;
  }
}
