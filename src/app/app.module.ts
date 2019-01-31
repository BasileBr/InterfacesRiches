import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponentComponent } from './video-component/video-component.component';
import { ChaptersComponent } from './chapters/chapters.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponentComponent,
    ChaptersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatMenuModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
