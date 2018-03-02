import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { listItem } from './listItem';
import { ComunicatorService } from '../comunicator.service';
import { GameListService } from '../game-list.service';
import { Router} from '@angular/router';
import { GeneriListService } from '../generi-list.service';
import { genereItem } from '../genereItem';


@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  gamesList : listItem[]; //gamesList è un array di oggetti listItem vuoti
  value : string = 'tutti';


  constructor(private gameListService : GameListService, private router : Router, private generiListService : GeneriListService ) {} //richiamo il costruttore di gameList
  
    generi : genereItem[];

  ngOnInit() {
   this.gamesList = this.gameListService.getGames(); //popolo la mia array usando un service;
   this.generi = this.generiListService.getGeneri();

  }

  selectedGame(item : listItem){
    this.router.navigate(['/detail/'+item.id]);

  }


}
