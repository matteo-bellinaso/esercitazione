import { Component, OnInit, Input } from '@angular/core';
import { GameListService } from '../game-list.service';
import { listItem } from '../list/listItem';
import { Listener } from 'selenium-webdriver';
import {NgForm, FormBuilder} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {IMyDpOptions, IMyDate} from 'mydatepicker';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
gameForm : FormGroup;

  constructor(private gameListService : GameListService, private router : ActivatedRoute, private routes : Router, private fb : FormBuilder) {
    this.router.params.subscribe(params =>{

      if(params['id'] != '' && params['id'] != null ){ 
        this.game = this.gameListService.getGamesById(params['id']);
       
      }
    });
   
    this.createForm();
   }

  ngOnInit() {

  }
  
  createForm(){
    this.gameForm = this.fb.group({
      titolo: this.game.name,
      description: this.game.description,
      price: this.game.price,
      releasePicker: this.game.releasePicker
    })
  }




  cercaGame(){
    this.game = this.gameListService.getGamesByName(this.value);
  }

  editGame(){
    let pickerDate: IMyDate = this.gameForm.get('releasePicker').value; 
    //in questo modo gli restituico l'oggetto picker, perchè vuole un oggetto data
    this.game.release = new Date(pickerDate.year, pickerDate.month-1, pickerDate.day);
    //this.gameListService.gameEditValue(this.game);

    this.gameListService.gameEditReact( this.game.id , this.gameForm.get('titolo').value, this.gameForm.get('description').value, this.gameForm.get('price').value);
    this.routes.navigate(['/detail/'+this.game.id]);
  }


}
