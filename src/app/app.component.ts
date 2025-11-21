import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { MainComponent } from "./components/main/main.component";
import { InfoComponent } from "./components/info/info.component";
import { MapComponent } from "./components/map/map.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, MainComponent, InfoComponent, MapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'logistic';
}
