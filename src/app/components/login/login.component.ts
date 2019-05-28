import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private auth:AuthService,
    private router:Router, 
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    
  }

  onSubmit({value,valid}:{value:{username,password},valid:boolean}) {
    console.log(value,valid);
    //this.auth.login(this.email,this.password);
    if ( !valid ) {
      this.flashMessage.show('Please enter username and password', {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {
      this.auth.login(value.username,value.password);
    }
  }

}
