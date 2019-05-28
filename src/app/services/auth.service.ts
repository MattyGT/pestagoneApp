import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FlashMessagesService } from 'angular2-flash-messages';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private flashMessage:FlashMessagesService) {
      //this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      //this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue():User {
      return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
      console.log("Login service");
      return this.http.post<any>('http://www.pestagone.co.za/manager/index.php?gud=jnsdfiuhsd8fnsdn21', { username, password })
          .pipe(map(user => {
              // login successful if there's a jwt token in the response
              if ( user && user.token ) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify(user));
                  this.currentUserSubject.next(user);
                  this.flashMessage.show('You are successfully logged in', {
                    cssClass: 'alert-success', timeout: 2000
                  });
              } else {
                this.flashMessage.show('Username and/or password incorrect', {
                  cssClass: 'alert-danger', timeout: 2000
                });
              }
              return user;
          }));
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }
}
