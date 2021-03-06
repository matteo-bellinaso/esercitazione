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
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { AuthGuard } from './auth.guard';
import { GeneriListService } from './generi-list.service';
import { MyDatePickerModule } from 'mydatepicker';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ListComponent,
    FooterComponent,
    DetailComponent,
    EditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule,  demoRouter, MyDatePickerModule
  ],
  providers: [ComunicatorService, GameListService , LoginService, AuthGuard, GeneriListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
