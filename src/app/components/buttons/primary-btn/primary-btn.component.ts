import { Component, Input, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-primary-btn',
  templateUrl: './primary-btn.component.html',
  styleUrls: ['./primary-btn.component.scss'],
})
export class PrimaryBtnComponent implements OnInit {
  @Input() buttonTitle!: string;
  @Input() buttonIcon!: IconProp;
  @Input() loader!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
