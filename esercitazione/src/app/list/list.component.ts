import { Component, OnInit } from '@angular/core';
import { listItem } from './listItem';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  games : listItem[] = [

    new listItem("../assets/cod.jpg","Call Of Duty","sparatutto","49.99"),
    new listItem("../assets/shadow.png","Shadow of the Colossus","Avventura Fantasy","29.99"),
    new listItem("../assets/batman.jpg","Batman Arkham Knight","avventura","39.99"),
    new listItem("../assets/crash.png","Crash Bandicoot","avventura - platform","29.99")

  ]

  constructor() { }

  ngOnInit() {
  }

}
