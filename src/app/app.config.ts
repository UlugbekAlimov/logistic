import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  HttpClient,
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient],
        },
        defaultLanguage: 'ru',
      })
    ),

    provideHttpClient(withFetch(), withInterceptors([])),
  ],
};

export function createTranslateLoader(http: HttpClient) {
  return {
    getTranslation: (lang: string) => {
      return http.get(`./assets/${lang}.json`);
    },
  } as TranslateLoader;
}
