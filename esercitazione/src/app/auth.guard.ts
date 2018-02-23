import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private user : LoginService ,private router : Router){ }

  utente : string;
  pass : string;

  canActivate(){
    this.utente = sessionStorage.getItem("username");
    this.pass = sessionStorage.getItem("password");
    console.log("check");
  
    if(this.utente == null && this.pass == null){
        this.user.setLogged(false);
        this.user.isLog(false);
        this.router.navigate(['/login']);

      }else{
        this.user.isLog(true);
        this.user.setLogged(true);
        return true;
      }
        
      
  }

  
}
