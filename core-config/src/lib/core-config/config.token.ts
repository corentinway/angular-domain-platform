import { InjectionToken } from '@angular/core';

export interface CoreConfig {
  apiUrl: string;
  environment: 'dev' | 'staging' | 'prod';
  featureFlags?: Record<string, boolean>;
}
export const CORE_CONFIG = new InjectionToken<CoreConfig>('CORE_CONFIG');
