import { TestBed } from '@angular/core/testing';
import { CoreHttpService } from './http.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { provideHttpClient } from '@angular/common/http';

describe('CoreHttpService', () => {
  let service: CoreHttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CoreHttpService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(CoreHttpService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should performe a GET request', () => {
    type ResponseData = {
      value: number;
    };
    service.get<ResponseData>('/api/test').subscribe((data) => {
      expect(data.value).toBe(42);
    });

    const req = httpMock.expectOne('/api/test');
    req.flush({ value: 42 });
  });
});
