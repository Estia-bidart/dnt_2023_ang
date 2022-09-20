import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApi } from '../_interfaces/api';
import { IDataUser, ISingleUser, IUser } from '../_interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://20.39.234.201:8080/users'

  constructor(private http: HttpClient) { }

  
  getAllUsers(): Observable<IDataUser>{
    return this.http.get<IDataUser>(this.url)
  }

  getUser(uid: string | null): Observable<ISingleUser>{
    return this.http.get<ISingleUser>(this.url+'/'+uid)
  }

  addUser(user: IUser): Observable<IApi>{
    return this.http.put<IApi>(this.url, user)
  }

  updateUser(user: IUser): Observable<IApi>{
    return this.http.patch<IApi>(this.url+'/'+user.id, user)
  }

  deleteUser(uid: number | undefined): Observable<null>{
    return this.http.delete<null>(this.url+'/'+uid)
  }
}
