import { Injectable } from '@angular/core';

import { Team } from '../classes/team';
import { TEAMS } from '../mock-teams';
//import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Task } from '../classes/task';
import { TASKS } from '../mock-tasks';

@Injectable()
export class TeamsService {
  TEAMS: Team[] = [
    new Team(1, 'Team1'),
    new Team(2, 'Team2'),
    new Team(3, 'Team3'),
    new Team(4, 'Team4')
  ];


  constructor(
    //private httpClient: HttpClient
  ) { }

  getTeams(): Observable<Team[]> {
    return of(this.TEAMS);
  }

  getTeamById(id: number): Observable<Team> {
    return of(this.TEAMS.find(team => team.id === id));
  }

  public addTeam(team: Team): Observable<any> {
    return of(this.TEAMS.push(team));
  }

  getTasks(): Observable<Task[]> {
    return of(TASKS);
  }

  getTask(id: number): Observable<Task> {
    return of(TASKS.find(task => task.id === id));
  }

}
