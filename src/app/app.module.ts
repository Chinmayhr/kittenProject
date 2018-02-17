import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpService } from './services/http.service';
import { DetailsComponent } from './components/details/details.component';
import { ReviewFormComponent } from './components/review-form/review-form.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    ReviewFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
