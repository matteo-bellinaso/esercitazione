import { Component, OnInit } from '@angular/core';
import { listItem } from './listItem';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

games : listItem[]=[

  new listItem("cod","Call of Duty", "sparatutto","49.99"),
  new listItem("lol","League of Legends", "MOBA", "29.99"),
  new listItem("bat","Batman Arkham Knight","avventura","44.99"),
  new listItem("crash","Crash Bandicoot","avventura","39.99")

]


  constructor() { }

  ngOnInit() {
  }

}
