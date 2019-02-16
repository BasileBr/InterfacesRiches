import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponentComponent } from './video-component/video-component.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { MapsComponent } from './maps/maps.component';
//import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponentComponent,
    ChaptersComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatMenuModule,
    BrowserAnimationsModule,
    AppRoutingModule,
//    LeafletModule.forRoot()
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB9sLDybhg261fUD5i4KMIyHp-ikDCdvpc'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
