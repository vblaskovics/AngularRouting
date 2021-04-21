import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
    const letActivate = Math.random() < 0.5;
    console.log(letActivate ? "Here you go, sir" : "You shall not pass!");
    return letActivate;
  }
}
