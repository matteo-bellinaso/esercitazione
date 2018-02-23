import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private user : LoginService){ }

  utente : string;
  pass : string;

  canActivate(){
    this.utente = sessionStorage.getItem("username");
    this.pass = sessionStorage.getItem("password");
  
    if(this.utente == null && this.pass == null){
        this.user.setLogged(false);
        this.user.isLog(false);

      }else{
        this.user.isLog(true);
        return true;
      }
        

  }

  
}
