import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UiModule } from './modules/ui/ui.module';
import { AppRouterModule } from './modules/app-router/app-router.module';


import { AppComponent } from './app.component';

import { TeamComponent } from './components/team/team.component';
import { NewteamformComponent } from './components/newteamform/newteamform.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    NewteamformComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
