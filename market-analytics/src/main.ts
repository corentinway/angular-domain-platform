import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import {CORE_CONFIG} from '@portfolio-platform/core-config'

bootstrapApplication(App, {
    providers: [
        {
            provide: CORE_CONFIG,
            useValue: {
                apiUrl: 'https://api.market-analytics.dev',
                environment: 'dev',
            }
        }
    ]
}).catch((err) => console.error(err));
