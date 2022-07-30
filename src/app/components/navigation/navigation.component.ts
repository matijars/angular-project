import { Component, OnInit } from '@angular/core';

import {
  faUsers,
  faCloudSunRain,
  faHamburger,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  usersIcon = faUsers;
  weatherIcon = faCloudSunRain;
  recipesIcon = faHamburger;

  ngOnInit(): void {}
}
