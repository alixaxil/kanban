import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../classes/team';
import { User } from '../classes/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getUsersByTeam (teamId: number) : Observable<any>{
    return this.httpClient.get('team/' + teamId + '/users');

  }
}
