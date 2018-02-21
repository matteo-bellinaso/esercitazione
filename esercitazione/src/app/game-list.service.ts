import { Injectable } from '@angular/core';
import { listItem } from './list/listItem';

@Injectable()
export class GameListService {
  games : listItem[] = [

    new listItem("cod","../assets/cod.jpg","Call Of Duty","sparatutto","49.99"),
    new listItem("shadow","../assets/shadow.png","Shadow of the Colossus","Avventura Fantasy","29.99"),
    new listItem("batman","../assets/batman.jpg","Batman Arkham Knight","avventura","39.99"),
    new listItem("crash","../assets/crash.png","Crash Bandicoot","avventura - platform","29.99")

  ];


  getGames(){

    return this.games;

  }

  getGamesById(id:string): listItem{
    for(let item of this.games)
    {
      if(item.id == id){
        return item;
      }
    }
    return null;
  }

game : listItem;
  
  gameEditValue(id : string, nome : string, description : string, price : string){

      this.game = this.getGamesById(id);

     this.game.setName(nome);
     this.game.setGenere(description);
    this.game.setPrice(price);

  }


}
