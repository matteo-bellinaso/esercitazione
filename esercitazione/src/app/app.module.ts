import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ComunicatorService } from './comunicator.service';
import { ListComponent } from './list/list.component';
import { FooterComponent } from './footer/footer.component';
import { DetailComponent } from './detail/detail.component';
import { GameListService } from './game-list.service';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { demoRouter } from './router.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ListComponent,
    FooterComponent,
    DetailComponent,
    EditComponent
  ],
  imports: [
    BrowserModule, FormsModule,  demoRouter
  ],
  providers: [ComunicatorService, GameListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
