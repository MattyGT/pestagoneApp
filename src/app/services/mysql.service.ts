import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { Client } from '../models/Client';
import { JobCard } from '../models/JobCard';
import { User } from '../models/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic ' + btoa('PestAPest:#@!321314Vsxcs%*&')
  })
};

@Injectable({
  providedIn: 'root'
})
export class MysqlService {
  private mySqlUserUrl: string = "http://www.pestagone.co.za/manager/user.php";
  private mySqlJobCardUrl: string = "http://www.pestagone.co.za/manager/index.php?gjc=9283rnf8bsdf";
  private mySqlClientUrl: string = "http://www.pestagone.co.za/manager/client.php"; 

  constructor( private http: HttpClient ) { }

  ngOnInit() {

  }

  // USER SQL SERVICES
  // ** UPDATE **
  public updateUser( user:User ):Observable<User> {
    return this.http.post<User>(this.mySqlUserUrl, user, httpOptions);
  }
  // ** GET **
  public getUser():Observable<User[]> {
    return this.http.get<User[]>(this.mySqlUserUrl);
  }

  // JOB CARD SQL SERVICES
  // ** UPDATE **
  public updateJobCard( jobCard:JobCard ):Observable<JobCard> {
    return this.http.post<JobCard>(this.mySqlJobCardUrl, jobCard, httpOptions);
  }
  // ** GET **
  public getJobCards():Observable<JobCard[]> {
    return this.http.get<JobCard[]>(this.mySqlJobCardUrl);
  }

  // ** GET JOB CARD DETAILS **
  public getJobCard(id):Observable<JobCard> {
    return this.http.get<JobCard>(this.mySqlJobCardUrl);
  }


  // CLIENT SQL SERVICES
  // ** UPDATE **
  public updateClient( client:Client ):Observable<JobCard> {
    return this.http.post<JobCard>(this.mySqlClientUrl, client, httpOptions);
  }
  // ** GET **
  public getClient():Observable<Client[]> {
    return this.http.get<Client[]>(this.mySqlClientUrl);
  }

}
