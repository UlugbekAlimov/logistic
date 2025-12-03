import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements AfterViewInit, OnDestroy {
  @ViewChild('swipeLayer') swipeLayer!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  currentIndex = 0;

  slides = [
    { img: 'img/truck.jpg', title: 'HERO_TITLE', subtitle: 'HERO_SUBTITLE' },
    { img: 'img/banner2.png', title: 'HERO_TITLE', subtitle: 'HERO_SUBTITLE' },
    { img: 'img/banner3.png', title: 'HERO_TITLE', subtitle: 'HERO_SUBTITLE' },
  ];

  autoInterval: any;

  next() {
    this.currentIndex =
      this.currentIndex === this.slides.length - 1 ? 0 : this.currentIndex + 1;
  }

  prev() {
    this.currentIndex =
      this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initSwipe();
      this.startAutoSwipe();
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      clearInterval(this.autoInterval);
    }
  }

  startAutoSwipe() {
    this.autoInterval = setInterval(() => {
      this.next();
    }, 4000);
  }

  stopAutoSwipeTemporarily() {
    clearInterval(this.autoInterval);
    setTimeout(() => this.startAutoSwipe(), 4000);
  }

  // ------------------------
  // SWIPE LOGIC
  // ------------------------
  private startX = 0;
  private currentX = 0;
  private isDragging = false;

  initSwipe() {
    const el = this.swipeLayer.nativeElement;

    el.addEventListener('touchstart', (e: TouchEvent) => {
      this.startX = e.touches[0].clientX;
      this.isDragging = true;
      this.stopAutoSwipeTemporarily();
    });

    el.addEventListener('touchmove', (e: TouchEvent) => {
      if (!this.isDragging) return;
      this.currentX = e.touches[0].clientX;
    });

    el.addEventListener('touchend', () => {
      if (!this.isDragging) return;

      const diff = this.startX - this.currentX;

      if (diff > 50) this.next();
      else if (diff < -50) this.prev();

      this.isDragging = false;
    });
  }

  openMail() {
    window.open('mailto:dunyoiasr@mail.ru', '_blank');
  }
}
