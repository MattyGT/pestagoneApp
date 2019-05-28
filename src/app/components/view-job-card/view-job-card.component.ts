import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { JobService } from '../../services/job.service';
import { MysqlService } from '../../services/mysql.service';

import { JobCard } from '../../models/JobCard';

@Component({
  selector: 'app-view-job-card',
  templateUrl: './view-job-card.component.html',
  styleUrls: ['./view-job-card.component.css']
})
export class ViewJobCardComponent implements OnInit {
  id: number;
  jobCard: JobCard;
  showFees: boolean = true;
  allowUpdate: boolean = true;
  amountOwed: number;

  constructor(
    private jobService: JobService,
    private router: Router,
    private route: ActivatedRoute,
    private mysqlserve: MysqlService
  ) { }

  ngOnInit() {
    this.amountOwed = 0;
    console.log(this.amountOwed);

    //GET ID FROM URL
    this.id = this.route.snapshot.params['id'];
    //this.jobCard = this.mysqlserve.getJobCard(this.id);
  }

}
