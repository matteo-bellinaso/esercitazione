import { Component, OnInit } from '@angular/core';
import {menuItem} from '../menuItem';
import { ComunicatorService } from '../comunicator.service';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuItems: menuItem[] = [
    new menuItem("edit", 'Edit'),
    new menuItem("list", 'Lista'),
    new menuItem("home", 'Home')
  ];


  constructor(private comunicatorService : ComunicatorService) { }

  ngOnInit() {
  }


  selectSection(id:string){

    this.menuItems.forEach(item => {

      if(id == item.id){
        item.selected = true;
      }else{
        item.selected = false;
      }
      
    });

    this.comunicatorService.setSelection(id);
    
  }



 


}
