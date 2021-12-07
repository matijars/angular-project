import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

import { UserList } from 'src/app/interface/user';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(private userService: UsersService) {}

  userList: UserList = [];
  loader!: boolean;
  buttonIcon = faUser;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.loader = true;

    this.userService.getUsers().subscribe((res) => {
      console.log(res);
      this.loader = false;
      this.userList = res.results;
    });
  }
}
