import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  imports: [TranslateModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  openMail() {
    window.open('mailto:dunyoiasr@mail.ru', '_blank');
  }
}
