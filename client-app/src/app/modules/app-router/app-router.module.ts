import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ShopViewComponent } from '../../components/shop-view/shop-view.component';
//import { FamilyViewComponent } from '../../components/family-view/family-view.component';
//import { FamilyMemberViewComponent } from '../../components/family-member-view/family-member-view.component';
import { LoginViewComponent } from '../../components/login-view/login-view.component';
import { RegisterViewComponent } from '../../components/register-view/register-view.component';
import { TeamsViewComponent } from '../../components/teams-view/teams-view.component';
import { TeamViewComponent } from '../../components/team-view/team-view.component';
import { TaskViewComponent } from '../../components/task-view/task-view.component';


const appRoutes: Routes = [
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
  declarations: []
})
export class AppRouterModule { }
