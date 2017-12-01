import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Team } from '../../classes/Team';
import {TeamService} from '../../services/team.service';

@Component({
  selector: 'app-newteamform',
  templateUrl: './newteamform.component.html',
  styleUrls: ['./newteamform.component.css']
})
export class NewteamformComponent implements OnInit {
  public team: Team;

  @Output()
  public createTeam: EventEmitter<Team> = new EventEmitter();

  public clickButton(name: string): void {
    this.team = new Team(name);
    this.createTeam.emit(this.team);
  }

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.teamService.createTeam(this.team).subscribe((team) => {
      this.team = team;
  });
}


}


