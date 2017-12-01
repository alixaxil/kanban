import { Injectable } from '@angular/core';

import { MemberShip } from '../classes/membership';
import { Team } from '../classes/team';
import { User } from '../classes/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class KanbanService {

  public constructor(
    private httpClient: HttpClient
  ) {}

  public getAllTeams(): Observable<Team[]> {
    return this.httpClient.get('/teams');
  }

  public getTeam(id: number): Observable<Team> {
    return this.httpClient.get('/teams/' + id);
  }
}
