import { Injectable } from '@angular/core';

import { Team } from '../classes/team';
import { TEAMS } from '../mock-teams';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Task } from '../classes/task';
import { TASKS } from '../mock-tasks';
import { ApiService } from './api.service';

@Injectable()
export class TeamsService {
  TEAMS: Team[] = [
    new Team(1, 'Team1'),
    new Team(2, 'Team2'),
    new Team(3, 'Team3'),
    new Team(4, 'Team4')
  ];
  


  constructor(
    private apiService: ApiService
  ) { }

  getTeams(): Observable<Team[]> {
    return this.apiService.get('/team')
    .map(data => data);
  }

  getTeamById(id: number): Observable<Team> {
    return this.apiService.get('/team/' + id)
    .map(data => data);
  }

  public addTeam(teamName: string): Observable<any> {
    return this.apiService.post("/team/list", {"name": teamName});
  }

  getTasks(): Observable<Task[]> {
    return of(TASKS);
  }

  getTask(id: number): Observable<Task> {
    return of(TASKS.find(task => task.id === id));
  }

}
