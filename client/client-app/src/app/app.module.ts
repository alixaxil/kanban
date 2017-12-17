import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UiModule } from './modules/ui/ui.module';
import { AppRouterModule } from './modules/app-router/app-router.module';


import { AppComponent } from './app.component';
import { LoginViewComponent } from './components/login-view/login-view.component';
import { RegisterViewComponent } from './components/register-view/register-view.component';
import { TeamsViewComponent } from './components/teams-view/teams-view.component';
import { TeamViewComponent } from './components/team-view/team-view.component';
import { TaskViewComponent } from './components/task-view/task-view.component';
import { TaskService, TeamsService, ApiService } from './services/';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    RegisterViewComponent,
    TeamsViewComponent,
    TeamViewComponent,
    TaskViewComponent,
    
  ],
  imports: [
    BrowserModule,
    UiModule,
    AppRouterModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [TeamsService, TeamsService, AuthService, ApiService ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  
})
export class AppModule { }
