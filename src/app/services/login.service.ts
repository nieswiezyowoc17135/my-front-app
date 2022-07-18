import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../models/login';

@Injectable({providedIn: 'root'})
export class LoginService {

  private loginUrl = 'https://localhost:7249/api/auth/login'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  //metoda1
  loginServiceMethod(login: Login) {
    return this.http.post(this.loginUrl, login);
  }

  constructor(
    private http: HttpClient
  ) { }
}
