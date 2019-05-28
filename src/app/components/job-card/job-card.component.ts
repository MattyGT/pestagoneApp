import { Component, OnInit } from '@angular/core';

import { JobService } from '../../services/job.service';
import { MysqlService } from '../../services/mysql.service';

import { JobCard } from '../../models/JobCard';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {
  public jobCards: JobCard[];
  public data: any;
  public loading = true;

  constructor( private jobCardService: JobService, private mysqlserve: MysqlService ) { }

  ngOnInit() {
    //console.log(this.jobCard.getAllJobCards());
    this.mysqlserve.getJobCards().subscribe(data => {
      this.jobCards = data;
      this.loading = false;
    });
    
  }

  
}
