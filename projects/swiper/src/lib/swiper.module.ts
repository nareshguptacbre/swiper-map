import { NgModule } from '@angular/core';
import { SwiperComponent } from './swiper.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [SwiperComponent, MapComponent],
  imports: [
  ],
  exports: [SwiperComponent]
})
export class SwiperModule { }
