import { Component, OnInit, EventEmitter } from '@angular/core';
import { AllteamsService } from '../../services/allteams.service';
import { Team } from '../../classes/team';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css'],
  providers:[AllteamsService]
})
export class CreateTeamComponent implements OnInit {
  public countId = 4;
  public teams: Team[];

  constructor(private allTeamsService: AllteamsService) { }

  ngOnInit() {
    this.teams = this.allTeamsService.getTeams();
  }

  public createTeam: EventEmitter<Team> = new EventEmitter();

  public clickButton(id: number, name: string): void {
     this.allTeamsService.addTeam(new Team(this.countId, name));
     this.createTeam.emit(new Team(this.countId, name));
     this.countId++;
  }
}
