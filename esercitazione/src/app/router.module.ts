import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ComunicatorService } from './comunicator.service';
import { ListComponent } from './list/list.component';
import { Router} from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';

const Routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'list',  component: ListComponent },
  {path: 'edit', component: EditComponent},
  { path: 'detail/:id',  component: DetailComponent },
  { path: 'edit/:id', component: EditComponent},
  { path: "", redirectTo : "/home", pathMatch: 'full'},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(Routes)
  ],
  exports: [
    RouterModule
  ]
})
export class demoRouter { }