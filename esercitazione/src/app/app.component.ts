import { Component } from '@angular/core';
import { ComunicatorService } from './comunicator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentSection  = 'home';
  idSelected ;
  constructor(private headerService: ComunicatorService){
    this.headerService.sectionSelected$.subscribe(id=>{
      this.currentSection = id;
    });
  }

  setGameSelected(id: string){

    this.idSelected = id;
    this.currentSection = 'detail';

  }

}
