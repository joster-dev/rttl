import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';
import { AprilEventComponent } from './april-event/april-event.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'donate', component: DonateComponent },
  // { path: 'april-event', component: AprilEventComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
