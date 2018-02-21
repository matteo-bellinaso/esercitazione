import { Component } from '@angular/core';
import { ComunicatorService } from './comunicator.service';
import { GameListService } from './game-list.service';
import { listItem } from './list/listItem';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentSection  = 'home';
  idSelected ;
  
  constructor(private headerService: ComunicatorService , private gameListService : GameListService){
    this.headerService.sectionSelected$.subscribe(id=>{
      this.currentSection = id;
    });
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
