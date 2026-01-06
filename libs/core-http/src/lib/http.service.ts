import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { catchError, throwError } from "rxjs";
import { HttpError } from "./http-error.model";


@Injectable({  providedIn: 'root' })
export class CoreHttpService {
    private readonly http = inject(HttpClient);
    
    get<T>(url: string) {

        return this.http.get<T>(url).pipe(
            catchError((error) => {
                const httpError: HttpError = {
                    status: error.status,
                    message: 'API call failed',
                    technicalMessage: error.message,
                };
                return throwError(() => httpError);
            })
        );
    }
}