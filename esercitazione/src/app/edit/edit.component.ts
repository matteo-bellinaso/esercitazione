import { Component, OnInit, Input } from '@angular/core';
import { GameListService } from '../game-list.service';
import { listItem } from '../list/listItem';
import { Listener } from 'selenium-webdriver';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private gameListService : GameListService, private router : ActivatedRoute) {
    this.router.params.subscribe(params =>{
      //params è il parametro per andare a prendere l'id passato nell'url da list component

      if(params['id'] != '' && params['id'] != null ){ //controlla che il parametro passato non sia nullo o vuoto.
        this.game = this.gameListService.getGamesById(params['id']);
       
      }
    });
   }

  ngOnInit() {


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
