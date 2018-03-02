import { Injectable } from '@angular/core';
import { genereItem } from './genereItem';

@Injectable()
export class GeneriListService {


  constructor() { }

  generi : genereItem[] = [

    new genereItem('01' , 'sparatutto'),
    new genereItem('02', 'platform'),
    new genereItem('03' , 'sport'),
    new genereItem('04', 'RPG'),
    new genereItem('05', 'avventura')

  ];

  getGameDes(value:string){
    for(let item of this.generi){
      if(item.id == value){
        return item.description;
      }
    }
    return null;
  }

}
