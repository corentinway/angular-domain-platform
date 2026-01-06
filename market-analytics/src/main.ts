import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';

import { CORE_CONFIG } from '@portfolio-platform/core-config';
import { coreHttpInterceptors } from '@portfolio-platform/core-http';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(withInterceptors([coreHttpInterceptors])),
    {
      provide: CORE_CONFIG,
      useValue: {
        apiUrl: 'https://api.market-analytics.dev',
        environment: 'dev',
      },
    },
  ],
}).catch((err) => console.error(err));
