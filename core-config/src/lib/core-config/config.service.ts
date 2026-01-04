import { inject, Injectable, signal } from '@angular/core';
import { CORE_CONFIG, CoreConfig } from './config.token';


@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private readonly config = inject(CORE_CONFIG);

  readonly apiUrl = signal(this.config.apiUrl);
  readonly environment = signal(this.config.environment);
  readonly featureFlags = signal(this.config.featureFlags);

}