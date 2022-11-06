import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { OwlOptions } from 'ngx-owl-carousel-o/public_api';

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

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.loader = true;

    this.userService.getUsers().subscribe((res) => {
      this.loader = false;
      this.userList = res.results;
    });
  }
}
