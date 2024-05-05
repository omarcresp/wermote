import { Component } from '@angular/core';

import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { TypeSliderComponent } from './components/type-slider/type-slider.component';
import { RemotePerksComponent } from './components/remote-perks/remote-perks.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeBannerComponent,
    TypeSliderComponent,
    RemotePerksComponent,
    HomeFooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
