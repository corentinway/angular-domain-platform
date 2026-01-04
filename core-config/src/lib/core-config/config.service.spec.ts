import { TestBed } from "@angular/core/testing";
import { CORE_CONFIG } from "./config.token";
import { ConfigService } from "./config.service";

describe('ConfigService', () => {
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: CORE_CONFIG,
                    useValue: {
                        apiUrl: 'http://localhost:3000',
                        environment: 'dev',
                    }
                }
            ]
        });
    });


    it('should expose apiUrl as a signal', () => {
        const service = TestBed.inject(ConfigService);
        expect(service.apiUrl()).toBe('http://localhost:3000');
    });

});