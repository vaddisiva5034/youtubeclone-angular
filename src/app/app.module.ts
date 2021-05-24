import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Compoennts/home/home.component';
import { SerachbarComponent } from './Compoennts/serachbar/serachbar.component';
import { MainvideoComponent } from './Compoennts/mainvideo/mainvideo.component';
import { ThumblineComponent } from './Compoennts/thumbline/thumbline.component';
import { FormsModule } from '@angular/forms';
import { VideolistComponent } from './Compoennts/videolist/videolist.component';
import { SafePipe } from './pipes/safe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Compoennts/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SerachbarComponent,
    MainvideoComponent,
    ThumblineComponent,
    VideolistComponent,
    SafePipe,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
