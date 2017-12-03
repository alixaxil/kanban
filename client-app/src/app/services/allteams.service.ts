import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Team } from '../classes/team';
import { Task, Progress } from '../classes/task';
import { User, Role } from '../classes/user';

@Injectable()
export class AllteamsService {

  t1: Team = new Team(1,'TEAM1');
  t2: Team = new Team(2,'TEAM2');
  t3: Team = new Team(3,'TEAM3');
  t4: Team = new Team(4,'TEAM4');



  constructor() {

  }
  public teams: Team[] = [
    this.t1,this.t2,this.t3, this.t4
  ];

  public getTeams(): Team[] {
       return this.teams;
  }
  public addTeam(team: Team) {
    this.teams.push(
      team
    )
  }
  /*constructor(
    private httpClient: HttpClient
  ) { }

  public getAllTeams(): Observable<any> {
    return this.httpClient.get('teams');
  }

  public getTeamById(id: number): Observable<any> {
    return this.httpClient.get('team/' + id);
  }*/
}
