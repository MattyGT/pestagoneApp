import { Injectable } from '@angular/core';


import { JobCard } from '../models/JobCard';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  jobCards: JobCard[];

  constructor( ) {
    
  }
}
