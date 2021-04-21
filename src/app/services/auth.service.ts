import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: string, pwd: string) :boolean {
    if (user === 'user' && pwd === 'pwd') {
      console.log(user, pwd)
      localStorage.setItem('username', user);
      return true;
    }

    return false;
  }

  logout():void {
    localStorage.removeItem('username');
  }

  getUser():any{
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}
