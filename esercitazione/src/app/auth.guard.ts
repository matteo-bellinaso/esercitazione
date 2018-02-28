import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private loginService : LoginService ,private router : Router){ }

  utente : string;
  pass : string;

  canActivate(){
    this.utente = sessionStorage.getItem("username");
    this.pass = sessionStorage.getItem("password");
  
    if(this.utente == null && this.pass == null){
        this.loginService.setLogged(false);
        this.loginService.isLog(false);
        this.router.navigate(['/login']);

      }else{
        this.loginService.isLog(true);
        this.loginService.setLogged(true);
        return true;
      }
        
      
  }

  
}
