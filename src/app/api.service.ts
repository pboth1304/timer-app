import { Injectable } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { catchError, switchAll, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private socket$: WebSocketSubject<any>;
  private messagesSubject$ = new Subject();
  public messages$ = this.messagesSubject$.pipe(
    switchAll(),
    catchError((e) => {
      throw e;
    })
  );

  constructor() {}

  connect(reconnect: boolean) {
    if (!this.socket$ || this.socket$.closed) {
      this.socket$ = this.getWebsocket();

      const messages = this.socket$.pipe(
        tap({
          error: (error) => console.log(error),
        }),
        catchError((_) => EMPTY)
      );

      console.log('messages', messages);

      this.messagesSubject$.next(messages);
    }
  }

  sendMessage(message: any) {
    this.socket$.next(message);
  }

  private getWebsocket() {
    return webSocket({
      url: environment.basePath,
      openObserver: {
        next: () => {
          console.log('connection ok');
        },
      },
      closeObserver: {
        next: () => {
          console.log('connection closed');
          this.socket$ = undefined;
          this.connect(true);
        },
      },
    });
  }
}
