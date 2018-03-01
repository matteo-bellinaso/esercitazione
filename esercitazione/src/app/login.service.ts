import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoginService {

  constructor(private router: Router) { }

  private logged: Subject<boolean> = new Subject<boolean>();
  //per inviare il valore booleano all'app-component.ts usiamo una subscribe, perchè cosi l'app component sta sempre in ascolto.

  public logged$ = this.logged.asObservable();
  //variabile in ascolto in app.component

  isLog(boolean){
    return boolean;
  } 

  setLogged(value: boolean) {
    this.logged.next(value);
  }
  //metodo per cambiare valore al logged.

  login(username: string, password: string) {

    if (password != "" && password != null && username != "" && username != null) {

      sessionStorage.setItem("username",username);
      sessionStorage.setItem("password",password);

      this.isLog(true);
      this.setLogged(true);
      this.router.navigate(['/home']);


    } else {
      this.isLog(false);
      alert("inserisci username e password")
    }

  }
  checkUser: string;
  checkPass: string;

  

  

  logOut(){

    sessionStorage.removeItem("password");
    sessionStorage.removeItem("username");
    this.router.navigate(['/login']);
    this.setLogged(false);
  }



}
