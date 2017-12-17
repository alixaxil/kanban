import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from '../../components/login-view/login-view.component';
import { RegisterViewComponent } from '../../components/register-view/register-view.component';
import { TeamsViewComponent } from '../../components/teams-view/teams-view.component';
import { TeamViewComponent } from '../../components/team-view/team-view.component';
import { TaskViewComponent } from '../../components/task-view/task-view.component';
import { AuthService } from '../../services/auth.service';


const appRoutes: Routes = [
  { path: '', component: TaskViewComponent },
  { path: 'teams', component: TeamsViewComponent },
  { path: 'teams/team/:id', component: TeamViewComponent },
  { path: 'teams/team/:id/task/:id', component: TaskViewComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'register', component: RegisterViewComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: [ AuthService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppRouterModule { }
