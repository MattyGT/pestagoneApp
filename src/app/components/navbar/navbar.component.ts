import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

import { User } from '../../models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    //console.log(this.userService.getUserDetails());
    //this.user = this.userService.getUserDetails();
    this.user = {
      id: 0,
      firstname: '',
      surname: '',
      email: '',
      token: ''
    };
  }

}
