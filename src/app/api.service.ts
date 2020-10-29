import { Injectable } from '@angular/core';
import { nextTick } from 'process';
import { interval, Observable, of, Subject } from 'rxjs';
import { retryWhen, delay, tap, filter } from 'rxjs/operators';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  myWebSocket = webSocket({
    url: environment.production
      ? 'wss://escape-church-timer.herokuapp.com'
      : 'ws://localhost:8080',
  });

  constructor() {}

  reconnect() {
    this.myWebSocket = webSocket({
      url: environment.production
        ? 'wss://escape-church-timer.herokuapp.com'
        : 'ws://localhost:8080',
    });
  }

  send() {
    this.myWebSocket.next({ timerStart: true });
  }
}
