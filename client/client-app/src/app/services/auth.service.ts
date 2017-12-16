import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  private static user: User = null;
  
  constructor(
    private http: HttpClient
  ) { }

  public login(username: string, password: string): void {
    //const result = new Subject<boolean>();
     this.http.post( 'http://localhost:8080/api/auth/login', {"username": "admin", "password": "admin"});
     //.subscribe(data => {console.log(data);});
    /*.subscribe((user) => {
      AuthService.user = user as User;
      result.next(true);
    }, (error) => {
      AuthService.user = null as User;
      result.next(false);
    });
    return result;  }
    
}*/
  }
}
