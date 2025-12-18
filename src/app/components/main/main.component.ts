import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './main.component.html',
})
export class MainComponent implements AfterViewInit, OnDestroy {
  @ViewChild('swipeLayer') swipeLayer!: ElementRef;

  currentIndex = 0;

  slides = [
    {
      img: 'img/truck.jpg',
      title: 'HERO_TITLE',
      subtitle: 'HERO_SUBTITLE',
      alt: 'Long-haul truck driving on the highway',
    },
    {
      img: 'img/banner2.png',
      title: 'HERO_TITLE',
      subtitle: 'HERO_SUBTITLE',
      alt: 'Warehouse worker loading a truck trailer',
    },
    {
      img: 'img/banner3.png',
      title: 'HERO_TITLE',
      subtitle: 'HERO_SUBTITLE',
      alt: 'Logistics team overseeing freight operations',
    },
  ];

  private startX = 0;
  private currentX = 0;
  private isDragging = false;
  private autoplay: any;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.initSwipe();
    this.startAutoplay();
  }

  ngOnDestroy() {
    if (this.autoplay) clearInterval(this.autoplay);
  }

  next() {
    this.currentIndex =
      this.currentIndex === this.slides.length - 1 ? 0 : this.currentIndex + 1;
  }

  prev() {
    this.currentIndex =
      this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
  }

  openMail() {
    window.open('mailto:dunyoiasr@mail.ru', '_blank');
  }

  startAutoplay() {
    this.autoplay = setInterval(() => this.next(), 4000);
  }

  initSwipe() {
    const layer = this.swipeLayer.nativeElement;

    layer.addEventListener('touchstart', (e: TouchEvent) => {
      this.startX = e.touches[0].clientX;
      this.isDragging = true;
    });

    layer.addEventListener('touchmove', (e: TouchEvent) => {
      if (!this.isDragging) return;
      this.currentX = e.touches[0].clientX;
    });

    layer.addEventListener('touchend', () => {
      if (!this.isDragging) return;

      const diff = this.startX - this.currentX;
      if (diff > 50) this.next();
      else if (diff < -50) this.prev();

      this.isDragging = false;
    });
  }
}
