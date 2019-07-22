import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../gestion-clients/login/user';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private router: Router) { }

  effectuerLogin(user: User) {
    if (user.pseudo === 'user@gmail.com' && user.motDePasse === '12345') {
      this.router.navigate(['gestionArticle']);
    }
  }
}