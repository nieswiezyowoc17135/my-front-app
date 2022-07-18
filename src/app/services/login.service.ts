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
    
    const credentials = {
      'username' : login.username,
      'password' : login.password
    }

    //metoda do wylogowywania
    //loginOutServiceMethod() {
    //  localStorage.removeItem("jwt");
   // }

    return this.http.post(this.loginUrl, credentials);
  }

  constructor(
    private http: HttpClient
  ) { }
}
