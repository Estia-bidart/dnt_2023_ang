import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { TokenService } from '../_services/token.service';
import { ApiErrorService } from '../_subjects/api-error.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService : TokenService,
    private apiErrorService : ApiErrorService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    if(this.tokenService.isLogged()){
      let clone = request.clone({
        headers: request.headers.set('Authorization', 'bearer '+this.tokenService.getToken())
      })
      return next.handle(clone).pipe(
        catchError(error => {
          console.log(error)

          if(error.status === 401){
            this.tokenService.clearRelog()
          }

          this.apiErrorService.sendError(error.error.message)

          return throwError(error)
        })
      )
    }

    
    return next.handle(request)

    
  }
}

export const TokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
}
