import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { Team } from '../../classes/team';

import { TeamsService } from '../../services/teams.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teams-view',
  templateUrl: './teams-view.component.html',
  styleUrls: ['./teams-view.component.css'],
  providers: [TeamsService]
})
export class TeamsViewComponent implements OnInit {

  @Output()
  public createItem: EventEmitter<Team> = new EventEmitter();
  public teams: Team[];
  //public count = 5;

  constructor(
    private teamsservice: TeamsService) { }

  //@Input()

  /*public clickButton(name: string,
  ): void {
    const t = new Team(this.count, name)
    this.createItem.emit(t);
    this.addteam(t);
    this.count++;
  }*/
  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.teamsservice.getTeams()
      .subscribe(teams => this.teams = teams);
  }

  private addTeam(teamName: string): void {
    let team = new Team(teamName);
    this.teamsservice.addTeam(team).
    subscribe(() => {
      this.teamsservice.getTeams().subscribe((teams: Team[]) => {
        this.teams = teams;
      });
    });
  }

}
