import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit, OnDestroy {
  mobileOpen = false;

  isLangReady = false;

  translate: TranslateService = inject(TranslateService);
  private langSub?: Subscription;

  constructor() {}

  ngOnInit(): void {
    const fallbackLang = this.translate.getFallbackLang() || 'ru';

    this.langSub = this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
    });

    this.translate.use(fallbackLang).subscribe(() => {
      this.loadTranslations();
    });
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
  }

  private loadTranslations() {
    this.isLangReady = true;
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    // чтобы на мобилке меню закрывалось после клика
    this.mobileOpen = false;
  }

  translateText(lang: string) {
    this.isLangReady = false;
    this.translate.use(lang);
  }

  toggleMenu() {
    this.mobileOpen = !this.mobileOpen;
  }

  openMail() {
    window.open('mailto:dunyoiasr@mail.ru', '_blank');
  }
}
