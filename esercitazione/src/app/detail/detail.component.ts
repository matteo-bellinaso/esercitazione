import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { ComunicatorService } from '../comunicator.service';
import { GameListService } from '../game-list.service';
import { listItem } from '../list/listItem';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  @Input('gameIdSelected') //variabile input inserita in HTML e la associeremo alla  variabile idSelected
  idSelected: string;

  game: listItem;// creo questa variabile perchè gli devo passare un oggetto listItem
  admin : boolean;
  constructor(private gamelistService : GameListService, private router : ActivatedRoute, private routes : Router , private loginService : LoginService) { 

    this.router.params.subscribe(params =>{
      //params è il parametro per andare a prendere l'id passato nell'url da list component

      if(params['id'] != '' && params['id'] != null ){ //controlla che il parametro passato non sia nullo o vuoto.
        this.game = this.gamelistService.getGamesById(params['id']);
      }

      if(sessionStorage.getItem("username") == "admin"){
        this.admin = true;
      }
    });

   

  }//service list

  ngOnInit() { //le proprietà di input nel costruttore non va bene va usata in init perchè è il primo ng ad essere lanciato

     //creo un oggetto listItem perchè gli devo passare l'oggetto corrente
  }



  setEditGame(game){
    this.routes.navigate(['/edit/'+game.id]);

  }


    
  

}
