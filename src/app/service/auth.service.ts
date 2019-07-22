import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../gestion-clients/login/user';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  static userEstConnecte() {
    throw new Error("Method pas encore implementé");
  }

  private userAuth: boolean = false;
 
 
  constructor(private router: Router) { }

  effectuerLogin(user: User) {

    if (
      user.pseudo === 'user@email.com' 
      && user.motDePasse === '12345') {
      this.userAuth = true;
      this.router.navigate(['/liste-produits']);

    } else {
      this.userAuth = false;
      }
  }

    userEstConnecte() {
    return this.userAuth;
  }

}