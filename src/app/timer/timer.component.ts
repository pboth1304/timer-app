import { Component, OnInit, ViewChild } from '@angular/core';
import {
  CountdownComponent,
  CountdownConfig,
  CountdownEvent,
} from 'ngx-countdown';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  @ViewChild('countdown', { static: false })
  private countdown: CountdownComponent;

  countdownConfig: CountdownConfig = { leftTime: 10 };

  constructor() {}

  ngOnInit() {
    console.log('countdown', this.countdown);
  }

  handle(event: CountdownEvent) {
    console.log('event', event);
  }
}
