import { Component, OnInit, ViewChild } from '@angular/core';
import {
  CountdownComponent,
  CountdownConfig,
  CountdownEvent,
} from 'ngx-countdown';
import { webSocket } from 'rxjs/webSocket';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  @ViewChild('countdown', { static: false })
  private countdown: CountdownComponent;

  countdownConfig: CountdownConfig = { leftTime: 10, demand: true };

  constructor(private readonly apiService: ApiService) {}

  ngOnInit() {
    console.log('countdown', this.countdown);
    this.apiService.connect(true);
  }

  handle(event: CountdownEvent) {
    console.log('event', event);
  }

  start() {
    this.countdown.begin();
    this.apiService.sendMessage('test');
  }
}
