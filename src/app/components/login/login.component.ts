import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: any = "";
  invalidLogin: boolean = false;
  loginChecker: boolean = false;
  logoutChecker: boolean = false;
  loginData: Login = {username: "username", password:"password"};

  loginTo()  {
    this.loginService.loginServiceMethod(this.loginData).subscribe(
      response => {
        const token = (<any>response).token;
        localStorage.setItem("jwt", token);
        this.invalidLogin = false;
        this.loginChecker = true;
        this.token = localStorage.getItem("jwt");
        this.router.navigate(["/"]);
      } , err => {
        this.invalidLogin = true;
        this.loginChecker = false;
      }
    )
  }

  loginOut() {
    localStorage.removeItem("jwt");
    this.logoutChecker = true;
    this.loginChecker = false;
  }

  constructor(private loginService: LoginService, private router:Router) { }
  
  ngOnInit(): void {
  }
}
