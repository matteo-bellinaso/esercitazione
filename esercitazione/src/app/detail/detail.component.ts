import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { ComunicatorService } from '../comunicator.service';
import { GameListService } from '../game-list.service';
import { listItem } from '../list/listItem';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  @Input('gameIdSelected') //variabile input inserita in HTML e la associeremo alla  variabile idSelected
  idSelected: string;

  game: listItem;// creo questa variabile perchè gli devo passare un oggetto listItem

  constructor(private gamelistService : GameListService) { }//service list

  ngOnInit() { //le proprietà di input nel costruttore non va bene va usata in init perchè è il primo ng ad essere lanciato

    this.game = this.gamelistService.getGamesById(this.idSelected); //creo un oggetto listItem perchè gli devo passare l'oggetto corrente
  }


  @Output("gameEdit")
  gameEdit: EventEmitter<string> = new EventEmitter()

  setEditGame(id : string){
    this.gameEdit.emit(id);

  }

}
