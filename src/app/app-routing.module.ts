import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  {
    path: '',
    component: TimerComponent,
  },
  {
    path: 'admin',
    component: AdminViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
