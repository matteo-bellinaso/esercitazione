import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ComunicatorService {


private sectionSelected: Subject<string> = new Subject<string>();
  
public sectionSelected$ = this.sectionSelected.asObservable();
  
public  setSelection(id : string) {  //gli passa il valore cliccato sulla lista, li carica su mySubject
    this.sectionSelected.next(id);
   }


}