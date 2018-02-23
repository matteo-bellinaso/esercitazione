import { Component, OnInit } from '@angular/core';
import {menuItem} from '../menuItem';
import { ComunicatorService } from '../comunicator.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuItems: menuItem[] = [
    new menuItem("edit", 'Edit', true),
    new menuItem("list", 'Lista'),
    new menuItem("home", 'Home'),
    new menuItem("detail", "")
  ];

  constructor(private comunicatorService : ComunicatorService, private loginService : LoginService) { }

  ngOnInit() {
  }
  //modifica
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

  loggOut(){
this.loginService.logOut();

  }
}
