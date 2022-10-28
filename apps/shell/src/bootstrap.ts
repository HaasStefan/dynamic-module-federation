import { APP_INITIALIZER, enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, ROUTES } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from './environments/environment';
import { createRoutes } from './app/utils/route-factory';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter([]),
    {
      provide: ROUTES,
      useFactory: () => createRoutes(),
      multi: true,
    },
  ],
}).catch((err) => console.error(err));
