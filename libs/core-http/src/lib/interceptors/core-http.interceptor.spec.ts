import {
  HttpClient,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { coreHttpInterceptor } from './core-http.interceptors';
import { CORE_HTTP_CONFIG } from '../tokens/core-http-config.tokens';

const BASE_URL_CORE_CONFIG_PROVIDER = {
  provide: CORE_HTTP_CONFIG,
  useValue: {
    baseUrl: 'https://api.test.com',
  },
};

const HEADER_CORE_CONFIG_PROVIDER = {
  provide: CORE_HTTP_CONFIG,
  useValue: {
    defaultHeaders: {
      'X-App': 'market-analytics',
    },
  },
};

describe('coreHttpInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([coreHttpInterceptor])),
        provideHttpClientTesting(),
      ],
    });

    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should not modify request when no config is provided', () => {
    http.get('/test').subscribe();

    const req = httpMock.expectOne('/test');
    expect(req.request.url).toBe('/test');
    expect(req.request.headers.keys().length).toBe(0);
  });

  type TestData = {
    urlRequested: string;
    shouldMessage: string;
    expectedUrl: string;
  };

  const data: TestData[] = [
    {
      urlRequested: '/markets',
      shouldMessage: 'should prepend baseURL for relative URLs',
      expectedUrl: 'https://api.test.com/markets',
    },
    {
      urlRequested: 'https://external.api.com/data',
      shouldMessage: 'should not prepend baseUrl for absolute URLs',
      expectedUrl: 'https://external.api.com/data',
    },
  ];

  data.forEach(({ urlRequested, shouldMessage, expectedUrl }) => {
    it(shouldMessage, () => {
      TestBed.resetTestingModule();

      TestBed.configureTestingModule({
        providers: [
          provideHttpClient(withInterceptors([coreHttpInterceptor])),
          provideHttpClientTesting(),
          BASE_URL_CORE_CONFIG_PROVIDER,
        ],
      });

      const httpWithMocking = TestBed.inject(HttpClient);
      httpWithMocking.get(urlRequested).subscribe();

      httpMock = TestBed.inject(HttpTestingController);

      const req = httpMock.expectOne(expectedUrl);
      expect(req.request.url).toBe(expectedUrl);

    });
  });

  it('should add default headers when provided', () => {
    TestBed.resetTestingModule();

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([coreHttpInterceptor])),
        provideHttpClientTesting(),
        HEADER_CORE_CONFIG_PROVIDER,
      ],
    });

    const httpWithMocking = TestBed.inject(HttpClient);
    httpWithMocking
      .get('/headers', {
        headers: {
          'X-Existing': 'true',
        },
      })
      .subscribe();

    httpMock = TestBed.inject(HttpTestingController);


    const req = httpMock.expectOne('/headers');
    expect(req.request.headers.get('X-App')).toBe('market-analytics');
    expect(req.request.headers.get('X-Existing')).toBe('true');

  });
});
