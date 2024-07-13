import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoderServiceService } from './loder-service.service';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {

  constructor(private loaderService: LoderServiceService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    return next.handle(req).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            this.loaderService.hide();
          }
        },
        error => {
          if (error instanceof HttpErrorResponse) {
            this.loaderService.hide();
          }
        }
      ),
      finalize(() => {
        this.loaderService.hide();
      })
    );
  }
  
}

