import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {MaterialItemsModule} from "./MaterialItemsModule";

import  {appRoutes} from './routes';
import { RouteGuard } from './route.guard';
import {AuthService} from "./services/auth.service";
import { TeamListComponent } from './pages/team-list/team-list.component';
import { CreateTeamComponent } from './pages/create-team/create-team.component';
import { TeamComponent } from './pages/team/team.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    TeamListComponent,
    CreateTeamComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialItemsModule
  ],
  providers: [AuthService, RouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
