import { Injectable } from '@angular/core';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;

  constructor() {
    this.user = {
      id: 1,
      firstname: "Matthew",
      surname: "Tyler",
      email: "matthewgtyler@gmail.com",
      token: "{c32r32-v43v5345v-345bfd}"
    };
  }

  getUserDetails():User{
    return this.user;
  }
}
