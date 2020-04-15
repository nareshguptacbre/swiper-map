import { Injectable } from '@angular/core';
import * as MapboxGl from 'mapbox-gl';
import { Observable, Subject } from 'rxjs';
import esriHybridStyle from '../../assets/JSON/esriHybrid.style.json';
import esriSatelliteStyle from '../../assets/JSON/esriSatellite.style.json';
// import bingHybridStyle from '../../assets/JSON/bingHybrid.style.json';
// import bingSatelliteStyle from '../../assets/JSON/bingSatellite.style.json';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  public mapInstance: any;
  public _map = new Subject<any>();

  constructor() {}

  map(): Observable<MapboxGl.Map> {
    return this._map.asObservable();
  }

  async getMap(mapObject) {
    const me = this;
    const style = await this.setStyle(mapObject.options.style);
    MapboxGl.accessToken = mapObject.mapboxAccessToken;
    me.mapInstance = new MapboxGl.Map({
      container: mapObject.options.container,
      style: style,
      zoom: mapObject.options.zoom,
      center: mapObject.options.lngLat
    });
    me.mapInstance.addControl(new MapboxGl.NavigationControl());
    me._map.next(me.mapInstance);
  }

  setStyle(style) {
    if (style === 'light') {
      return 'mapbox://styles/mapbox/light-v9';
    } else if (style === 'dark') {
      return 'mapbox://styles/mapbox/dark-v9';
    } else if (style === 'streets') {
      return 'mapbox://styles/mapbox/streets-v10';
    } else if (style === 'bright') {
      return 'mapbox://styles/mapbox/bright-v9';
    } else if (style === 'emerald') {
      return 'mapbox://styles/mapbox/emerald-v8';
    } else if (style === 'outdoors') {
      return 'mapbox://styles/mapbox/outdoors-v10';
    } else if (style === 'mapboxSatellite') {
      return 'mapbox://styles/mapbox/satellite-v9';
    } else if (style === 'mapboxHybrid') {
      return 'mapbox://styles/mapbox/satellite-streets-v11';
    } else if (style === 'esriSatellite') {
      return esriSatelliteStyle;
    } else if (style === 'esriHybrid') {
      return esriHybridStyle;
      // } else if (style === 'bingSatellite') {
      //   return this.getBingTiles(style);
      // } else if (style === 'bingHybrid') {
      //   return this.getBingTiles(style);
    }
  }

  updateStyle(style) {
    const me = this;
    me.mapInstance.setStyle(me.setStyle(style));
    console.log(me.mapInstance);
    me._map.next(me.mapInstance);
  }
}
