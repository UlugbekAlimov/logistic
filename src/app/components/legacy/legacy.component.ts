import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-legacy',
  imports: [TranslateModule],
  templateUrl: './legacy.component.html',
  styleUrl: './legacy.component.css',
})
export class LegacyComponent {
  openMail() {
    window.open('mailto:dunyoiasr@mail.ru', '_blank');
  }
}
