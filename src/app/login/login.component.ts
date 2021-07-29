import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFailed = false;
  loginSuccess = false;
  authService: AuthService;

  constructor(private router: Router, authService: AuthService) {
    this.authService = authService;
   }

  ngOnInit(): void {
  }

  login(name: string, password: string){
    if (name === 'admin' && password === 'password'){
      this.loginSuccess = true;
      this.authService.login();
    }else{
      this.loginFailed = true;
    }
  }
}
