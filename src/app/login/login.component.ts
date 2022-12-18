import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public userName: string = '';
  public password: string = '';
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  public Login() {
    if (this.userName == 'testuser' && this.password == 'TestPassword12!@') {
      this.authService.login();
      this.router.navigate(['Home'])
    }else{
      confirm("User name or Password is Incorrect")
    }
  }
}
