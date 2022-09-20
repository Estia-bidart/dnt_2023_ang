import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICredentials } from '../_interfaces/credentials';
import { IToken } from '../_interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.baseURL+'/auth/'

  constructor(private http: HttpClient) { }

  login(credentials: ICredentials): Observable<IToken>{
    return this.http.post<IToken>(this.url+'login', credentials)
  }
}
