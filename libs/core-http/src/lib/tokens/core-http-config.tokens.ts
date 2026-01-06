import { InjectionToken } from '@angular/core';

export interface CoreHttpConfig {
  baseUrl?: string;
  defaultHeaders?: Record<string, string>;
}

export const CORE_HTTP_CONFIG = new InjectionToken<CoreHttpConfig>(
  'CORE_HTTP_CONFIG'
);
