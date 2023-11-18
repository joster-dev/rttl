import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';
import { FooterComponent } from './footer/footer.component';
import { AprilEventComponent } from './april-event/april-event.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DonateComponent,
    FooterComponent,
    AprilEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
