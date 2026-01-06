import { inject } from '@angular/core';
import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  CORE_HTTP_CONFIG,
  CoreHttpConfig,
} from '../tokens/core-http-config.tokens';

export function coreHttpInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const config = inject<CoreHttpConfig>(CORE_HTTP_CONFIG, { optional: true });

  const hasConfig = !!config;

  if (!hasConfig) {
    return next(req);
  }

  const isRelativeUrl = !req.url.startsWith('http');
  const hasBaseUrl = !!config?.baseUrl;

  let request = req;

  if (hasBaseUrl && isRelativeUrl) {
    request = request.clone({
      url: `${config.baseUrl}${req.url}`,
    });
  }

  const hasDefaultHeaders = !!config?.defaultHeaders;

  if (hasDefaultHeaders) {
    request = request.clone({
      setHeaders: config.defaultHeaders,
    });
  }

  return next(request);
}
