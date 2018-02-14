import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ComunicatorService } from './comunicator.service';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ComunicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
