import { Component, AfterViewInit } from '@angular/core';

declare const simplemaps_worldmap: any;

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    if (simplemaps_worldmap) {
      simplemaps_worldmap.load();
    }
  }
}
