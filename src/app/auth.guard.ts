import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  

  constructor(private loginService : LoginService ,private router : Router){ 
   

  }

  currentUrl : string;
  utente : string;
  pass : string;
  divieto : string = "edit"

  

  canActivate(){

    this.currentUrl = window.location.href;
    
    this.utente = sessionStorage.getItem("username");
    this.pass = sessionStorage.getItem("password");
  
    if(this.utente == null && this.pass == null){
        this.loginService.setLogged(false);
        this.loginService.isLog(false);
        this.router.navigate(['/login']);

      }else{

          
        this.loginService.isLog(true);
        this.loginService.setLogged(true);

        if(this.utente != "admin" && this.currentUrl.indexOf(this.divieto) != -1){ 
          //indexOf cerca nella stringa le lettere tra parentesi, se è -1 è false
          this.router.navigate(['/home']);
        }

        return true;
      }
        
      
  }

  
}
