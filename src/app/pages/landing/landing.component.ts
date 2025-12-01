import { Component } from '@angular/core';
import { NavbarComponent } from "../../layout/navbar/navbar.component";
import { InfoComponent } from "../../components/info/info.component";
import { MainComponent } from "../../components/main/main.component";
import { InfoCardComponent } from "../../components/info-card/info-card.component";
import { MapComponent } from "../../components/map/map.component";
import { LegacyComponent } from "../../components/legacy/legacy.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { FooterComponent } from "../../layout/footer/footer.component";

@Component({
  selector: 'app-landing',
  imports: [NavbarComponent, InfoComponent, MainComponent, InfoCardComponent, MapComponent, LegacyComponent, BannerComponent, FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
