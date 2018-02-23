import { Component } from '@angular/core';
import { ComunicatorService } from './comunicator.service';
import { GameListService } from './game-list.service';
import { listItem } from './list/listItem';
import {NgForm} from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentSection  = 'home';
  idSelected ;
  logged: boolean = false;
  
  constructor(private headerService: ComunicatorService , 
              private gameListService : GameListService , 
              private loginService : LoginService,
              private router : Router){

    this.headerService.sectionSelected$.subscribe(id=>{
      this.currentSection = id;
    });


    this.loginService.logged$.subscribe(logged=>{
      this.logged = logged;
    });
    //nel costruttore richiamiamo la funzione che mi mette in ascolto della funzione subscribe.

  }

  setGameSelected(id: string){

    this.idSelected = id;
    this.currentSection = 'detail';

  }


editSelected;
  setGameEdited(id: string){
    this.editSelected = id;
    this.currentSection = 'edit';
  }
  

  
}
