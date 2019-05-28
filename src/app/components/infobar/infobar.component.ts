import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

import { User } from '../../models/User';

@Component({
  selector: 'app-infobar',
  templateUrl: './infobar.component.html',
  styleUrls: ['./infobar.component.css']
})
export class InfobarComponent implements OnInit {
  user: User;
  today: number = Date.now();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUserDetails();
  }

}
