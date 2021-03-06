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

  userLogged : string
  admin : boolean;

  constructor(private comunicatorService : ComunicatorService, private loginService : LoginService) {
    if(sessionStorage.getItem("username") == "admin"){
      this.admin = true;
    }

   }

  ngOnInit() {
      this.userLogged = sessionStorage.getItem("username");

  }
  //modifica
 /* selectSection(id:string){

    this.menuItems.forEach(item => {

      if(id == item.id){
        item.selected = true;
      }else{
        item.selected = false;
      }
      
    });*/

   /* this.comunicatorService.setSelection(id);
    
  }*/

  loggOut(){
  this.loginService.logOut();

  }

  
  
  


}
