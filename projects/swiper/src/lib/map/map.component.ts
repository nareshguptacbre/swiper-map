import { Component, OnInit, Input, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';
import { Map } from 'mapbox-gl';
import { MapService } from './map.service';

@Component({
  selector: 'swiper-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit, OnChanges {
  map: Map;

  @Input() lngLat: [number];
  @Input() zoom: number;
  @Input() pitch?: number;
  @Input() bearing?: number;
  @Input() mapboxAccessToken: string;
  @Input() style: string;

  constructor(private mapService: MapService) {
    this.mapService.map().subscribe(map => {
      this.map = map;
    });
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.style && !changes.style.isFirstChange()) {
      console.log(changes.style.currentValue);
      this.mapService.updateStyle(changes.style.currentValue);
    }
  }

  ngAfterViewInit(): void {
    this.mapService.getMap({
      mapboxAccessToken: this.mapboxAccessToken,
      options: {
        container: 'swiperMap',
        style: this.style,
        zoom: this.zoom,
        lngLat: this.lngLat
      }
    });
  }
}
