import { Component, OnInit } from '@angular/core';
import { ActivationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private route: Router) {}

  homePage: boolean = true;

  ngOnInit(): void {
    this.route.events.subscribe((data) => {
      if (data instanceof ActivationStart) {
        data.snapshot.url.length
          ? (this.homePage = false)
          : (this.homePage = true);
      }
    });
  }
}
