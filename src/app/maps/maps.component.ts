import { Component, OnInit, OnDestroy } from '@angular/core';
//import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { GoogleMap } from '@agm/core/services/google-maps-types';
import { UnServiceService } from '../un-service.service';
import { Subscription } from 'rxjs/Subscription';
import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    AgmCoreModule
  ]
})

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit, OnDestroy {


  messages: Subscription;

  lat:number;
  lng:number;
  zoom:4;
  waypoints: waypoint[] = [];// retains the list of waypoints

  constructor(private http: HttpClient,private service:UnServiceService) { }

  ngOnInit() {
    this.http.get('./assets/chapters.json', {responseType: 'json'}).subscribe(data => {
      data['Waypoints'].map(
        waypoint => this.waypoints.push({
          lat: Number(waypoint.lat),
          lng: Number(waypoint.lng),
          label:String(waypoint.label),
          timestamp:Number(waypoint.timestamp)
        })
      )
    });




    this.messages = this.service.messages.subscribe(message => {
      //on consomme le message
    });



  }


  ngOnDestroy(){
    this.messages.unsubscribe()
  }
}
interface waypoint {
  lat: number;
  lng: number;
  label: string;
  timestamp:number;
}
