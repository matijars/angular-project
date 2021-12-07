import { Component, OnInit, Input } from '@angular/core';
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  birthdayIcon = faBirthdayCake;
  locationIcon = faMapMarkerAlt;
  phoneIcon = faPhone;
  emailIcon = faEnvelope;

  constructor() {}

  @Input() user: any;

  ngOnInit(): void {}
}
