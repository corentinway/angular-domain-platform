import { TestBed } from '@angular/core/testing';
import { CORE_HTTP_CONFIG, CoreHttpConfig } from './core-http-config.tokens';

describe('CORE_HTTP_CONFIG token', () => {
  it('should inject provided configuration', () => {
    const config: CoreHttpConfig = {
      baseUrl: 'https://api.test.com',
      defaultHeaders: {
        'X-Test': 'true',
      },
    };

    TestBed.configureTestingModule({
      providers: [
        {
          provide: CORE_HTTP_CONFIG,
          useValue: config,
        },
      ],
    });

    const injectedConfig = TestBed.inject(CORE_HTTP_CONFIG);

    expect(injectedConfig).toEqual(config);
  });
});
