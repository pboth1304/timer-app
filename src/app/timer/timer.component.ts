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
    this.apiService.myWebSocket.subscribe(
      (msg) => {
        if (msg) {
          this.countdown.begin();
        }
      },
      // Called whenever there is a message from the server
      (err) => console.log(err),
      // Called if WebSocket API signals some kind of error
      () => console.log('complete')
      // Called when connection is closed (for whatever reason)
    );
  }

  handle(event: CountdownEvent) {
    console.log('event', event);
  }
}
