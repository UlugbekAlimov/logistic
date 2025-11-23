import {
  Component,
  Inject,
  PLATFORM_ID,
  AfterViewInit,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  async ngAfterViewInit() {
    if (!this.isBrowser) return;

    const L = await import('leaflet');

    // === Используем твою иконку ===
    const customIcon = L.icon({
      iconUrl: 'img/marker2.png',
      iconSize: [25, 25],
      iconAnchor: [14, 45],
      popupAnchor: [0, -40],
    });

    // === Создание карты ===
    const map = L.map('map', {
      center: [40.2187, 69.73465],
      zoom: 13,
      zoomControl: true,
      attributionControl: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    // === Маркер ===
    L.marker([40.2187, 69.73465], { icon: customIcon })
      .addTo(map)
      .bindPopup('<strong>B. Gafurov</strong>')
      .openPopup();
  }
}
