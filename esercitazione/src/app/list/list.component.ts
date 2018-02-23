import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { listItem } from './listItem';
import { ComunicatorService } from '../comunicator.service';
import { GameListService } from '../game-list.service';
import { Router} from '@angular/router';


@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  gamesList : listItem[]; //gamesList è un array di oggetti listItem vuoti
  
  constructor(private gameListService : GameListService, private router : Router ) {} //richiamo il costruttore di gameList
  

  ngOnInit() {
   this.gamesList = this.gameListService.getGames(); //popolo la mia array usando un service;

  }

 /*@Output("gameChanged")
  selectGame: EventEmitter<string> = new EventEmitter()
  //dichiarazione emitter per passare il'id dell'oggetto da visualizzare */

  selectedGame(item : listItem){
  
    this.router.navigate(['/detail/'+item.id]);

  }


}
