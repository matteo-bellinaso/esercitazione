import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService) { }

  ngOnInit() {
  }
  username : string;
  password : string;

trylog(){
this.loginService.login(this.username,this.password);

}


}
