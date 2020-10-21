import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { retryWhen, delay } from 'rxjs/operators';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  connection$: WebSocketSubject<any>;
  RETRY_SECONDS = 10;

  myWebSocket: WebSocketSubject<any> = webSocket(
    environment.production
      ? 'wss://escape-church-timer.herokuapp.com'
      : 'ws://localhost:8080'
  );

  constructor() {}

  send(data: any) {
    this.myWebSocket.next({ timerStart: true });
  }
}
