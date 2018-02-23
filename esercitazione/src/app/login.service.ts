import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoginService {

  constructor(private router: Router) { }

  private logged: Subject<boolean> = new Subject<boolean>();
  //per inviare il valore booleano all'app-component.ts usiamo una subscribe, perchè cosi l'app component sta sempre in ascolto.

  public logged$ = this.logged.asObservable();

  setLogged(value: boolean) {
    this.logged.next(value);
  }

  login(username: string, password: string) {

    if (password != "" && password != null && username != "" && username != null) {

      this.setLogged(true);
      this.router.navigate(['/home']);

    } else {
      alert("inserisci username e password")
    }

  }

}
