import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router : Router, private jwtHelper: JwtHelperService) { }

  canActivate() {
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    //jezeli autoryzacja nie dziala to przenosi mnie tutaj
    this.router.navigate(["/"]);
    return false;
  }
}
