import { Component, OnInit, Input } from '@angular/core';
import { GameListService } from '../game-list.service';
import { listItem } from '../list/listItem';
import { Listener } from 'selenium-webdriver';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  
@Input('editSelected')
editSelected: string;
value: string;

game : listItem;

  constructor(private gameListService : GameListService) { }

  ngOnInit() {
    this.game = this.gameListService.getGamesById(this.editSelected);

  }




  cercaGame(){
  
  this.game = this.gameListService.getGamesById(this.value);
  }

  valNome : string;
  valDes: string;
  valPrice: string;

  editGame(){
  
  this.gameListService.gameEditValue(this.value, this.valNome, this.valDes, this.valPrice);

  }
  
}
