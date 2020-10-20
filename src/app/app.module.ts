import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { TimerComponent } from './timer/timer.component';
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  declarations: [AppComponent, AdminViewComponent, TimerComponent],
  imports: [BrowserModule, AppRoutingModule, CountdownModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
