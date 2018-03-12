import { Component, OnInit, Input } from '@angular/core';
import { GameListService } from '../game-list.service';
import { listItem } from '../list/listItem';
import { Listener } from 'selenium-webdriver';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {IMyDpOptions, IMyDate} from 'mydatepicker';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd-mm-yyyy',
};

@Input('editSelected')
editSelected: string;
value : string;

game : listItem;

  constructor(private gameListService : GameListService, private router : ActivatedRoute, private routes : Router) {
    this.router.params.subscribe(params =>{

      if(params['id'] != '' && params['id'] != null ){ 
        this.game = this.gameListService.getGamesById(params['id']);
       
      }
    });
   }

  ngOnInit() {

  }

  cercaGame(){
  
  this.game = this.gameListService.getGamesByName(this.value);
  }

  editGame(){
    let pickerDate: IMyDate = this.game.releasePicker.date; 
    //in questo modo gli restituico l'oggetto picker, perchè vuole un oggetto data
    this.game.release = new Date(pickerDate.year, pickerDate.month-1, pickerDate.day);
    this.gameListService.gameEditValue(this.game);
    this.routes.navigate(['/detail/'+this.game.id]);
  }


}
