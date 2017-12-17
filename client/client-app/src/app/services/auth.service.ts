import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ApiService } from './api.service';

@Injectable()
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User>(new User());
  public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  
  constructor(
    private apiService: ApiService
  ) { }
  //private static user: User = null;
  
  setAuth(user: User) {
    //this.jwtService.saveToken(user.token);
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    //this.jwtService.destroyToken();
    this.currentUserSubject.next(new User());
    this.isAuthenticatedSubject.next(false);
  }

  login(username: string, password: string): Observable<any> {
    return this.apiService.post('/auth/login', {"username": username, "password": password})
    .map(
      data => {
        console.log("Got user back!  " + JSON.stringify(data));
        this.setAuth(data);
        return data;
      }
    );
  }

  /*
  public login(username: string, password: string): Observable<boolean> {
    const result = new Subject<boolean>();
    console.log("Login in auth service");
     this.apiService.post( '/auth/login', {"username": username, "password": password})
    .map((user) => {
      console.log("Result user: " + JSON.stringify(user));
      AuthService.user = user as User;
      result.next(true);
    },
  errors => {
    console.log("Post error " + JSON.stringify(errors));
  });
    return result;  
}
  */
}
