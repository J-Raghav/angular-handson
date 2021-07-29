import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isRedirect: boolean = false;
  loginFailed = false;
  loginSuccess = false;
  authService: AuthService;

  constructor(private route: ActivatedRoute, private router: Router, authService: AuthService) {
    this.authService = authService;
   }

  ngOnInit(): void {
    this.isRedirect = Boolean(this.route.snapshot.paramMap.get('redirect'));
  }

  login(name: string, password: string){
    if (name === 'admin' && password === 'password'){
      this.loginSuccess = true;
      this.loginFailed = false;
      this.authService.login();
    }else{
      this.loginSuccess = false;
      this.loginFailed = true;
    }
  }
}
