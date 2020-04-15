import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export class SamplePageComponent implements OnInit {
  public lngLat = [-98, 38.5];
  public zoom = 4;
  public mapboxAccessToken = environment.mapbox.accessToken;
  public pitch = 0;
  public bearing = 0;
  public style = 'dark';

  public styles = [
    {
      display: 'Dark',
      value: 'dark'
    }, {
      display: 'Light',
      value: 'light'
    }, {
      display: 'Streets',
      value: 'streets'
    }, {
      display: 'Bright',
      value: 'bright'
    }, {
      display: 'Emerald',
      value: 'emerald'
    }, {
      display: 'Outdoors',
      value: 'outdoors'
    }, {
      display: 'Mapbox Satellite',
      value: 'mapboxSatellite'
    }, {
      display: 'Mapbox Hybrid',
      value: 'mapboxHybrid'
    }, {
      display: 'ESRI Satellite',
      value: 'esriSatellite'
    }, {
      display: 'ESRI Hybrid',
      value: 'esriHybrid'
    },
  ];

  constructor() {}

  ngOnInit() {}
}
