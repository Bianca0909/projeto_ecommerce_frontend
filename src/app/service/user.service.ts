import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../model/user-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:8080/auth'

  constructor(private http: HttpClient) { }

  register(model: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.url + '/register', model);
  }

}
