import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UiModule } from './modules/ui/ui.module';
import { AppRouterModule } from './modules/app-router/app-router.module';


import { AppComponent } from './app.component';
import { LoginViewComponent } from './components/login-view/login-view.component';
import { RegisterViewComponent } from './components/register-view/register-view.component';
import { TeamsViewComponent } from './components/teams-view/teams-view.component';
import { TeamViewComponent } from './components/team-view/team-view.component';
import {TeamsService} from './services/teams.service';
import { TaskViewComponent } from './components/task-view/task-view.component';
import { TaskService } from './services/task.service';
import { TeamService } from './services/team.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';



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
  providers: [TeamsService, TeamService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
