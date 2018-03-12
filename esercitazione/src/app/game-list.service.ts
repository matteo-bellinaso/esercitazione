import { Injectable } from '@angular/core';
import { listItem } from './list/listItem';
import { GeneriListService } from './generi-list.service';

@Injectable()
export class GameListService {
  
 
  games : listItem[] = [

    new listItem("cod","../assets/cod.jpg","call of duty", this.generiListService.getGameDes('01')  ,"49.99", new Date('4-3-2017')), 
    new listItem("shadow","../assets/shadow.png","shadow of the colossus",this.generiListService.getGameDes('05') ,"29.99", new Date('4-5-2017')),
    new listItem("batman","../assets/batman.jpg","Batman Arkham Knight",this.generiListService.getGameDes('05'),"39.99", new Date('6-6-2016')),
    new listItem("crash","../assets/crash.png","Crash Bandicoot",this.generiListService.getGameDes('02'),"29.99", new Date('12-4-2017')),
    new listItem("chrono","../assets/chrono-trigger.jpg","Chrono Trigger",this.generiListService.getGameDes('04'), "12.99",new Date('7-7-1996')),
    new listItem('bettlefield', '../assets/Battlefield.jpg','Battlefield 1',this.generiListService.getGameDes('01'),'39.99',new Date('11-12-2016')),
    new listItem('fallout','../assets/fallout.jpg','Fallout 4', this.generiListService.getGameDes('01'), '38.99',new Date('7-2-2017')),
    new listItem('ff7', '../assets/ff7.jpeg','Final Fantasy VII', this.generiListService.getGameDes('04'), '37.99',new Date('1-4-2001')),
    new listItem('fifa', '../assets/fifa.jpg','Fifa 18', this.generiListService.getGameDes('03'), '49.99',new Date('9-11-2017')),
    new listItem('ff9', '../assets/final.fantasy.jpg','Final Fantasy IX', this.generiListService.getGameDes('04'), '37.99',new Date('11-4-2005')),
    new listItem('hld' , '../assets/hyper.light.jpeg', ' Hyper Light Drifter', this.generiListService.getGameDes('05'),'19.99',new Date('8-6-2017')),
    new listItem('sms', '../assets/mario.calcio.jpg','Super Mario Striker',this.generiListService.getGameDes('03'),'69.99',new Date('7-8-2006')),
    new listItem('smk','../assets/mario.kart.jpg','Super Mario Kart',this.generiListService.getGameDes('03'),'27.99',new Date('4-11-1995')),
    new listItem('meatboy','../assets/meatboy.jpg', 'Super Meat Boy', this.generiListService.getGameDes('02'),'17.99',new Date('4-5-2013')),
    new listItem('pubg', '../assets/pubg.jpg','Player Unknow Battleground',this.generiListService.getGameDes('01'),'29.99',new Date('10-4-2017')),
    new listItem('tloz','../assets/zelda.jpg', 'the Legend of Zelda', this.generiListService.getGameDes('05'), '39.99',new Date('4-11-2007'))

  ];
  
  constructor(private generiListService : GeneriListService){  }

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

getGamesByName(value : string){
  for(let item of this.games){
    if(item.name.toLowerCase().match(value.toLowerCase())){ 
      return item;
    }
  }
  return null;
}
//match, mette a confronto item.name dell'oggetto e se combacia minimamente lo restituisce

game : listItem;
  
  /*gameEditValue(game: listItem){

      this.game = this.getGamesById(game.id);
      console.log(this.game);
     this.game.setName(game.name);
     this.game.setGenere(game.description);
     this.game.setPrice(game.price);

  }*/

gameEditReact(id: string, name : string, genere : string, price: string){
  this.game = this.getGamesById(id);
  this.game.setName(name);
  this.game.setGenere(genere);
  this.game.setPrice(price);

}

}
