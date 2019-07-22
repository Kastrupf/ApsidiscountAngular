import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user : User = new User();

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  // seConnecter() {
  //   console.log(this.user);
  //   this.authService.effectuerLogin(this.user);

    seConnecter() {
      console.log('seConnecter : user =' + this.user.pseudo + this.user.motDePasse);
      this.authService.effectuerLogin(this.user);
    }
  }
