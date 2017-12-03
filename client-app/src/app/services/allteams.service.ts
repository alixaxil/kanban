import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Team } from '../classes/team';

@Injectable()
export class AllteamsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllTeams(): Observable<any> {
    return this.httpClient.get('teams');
  }

  public getTeamById(id: number): Observable<any> {
    return this.httpClient.get('team/' + id);
  }
}
