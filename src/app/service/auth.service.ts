import { AuthModel } from './../model/auth-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:8080/auth'

  constructor(private http: HttpClient) {}

  signIn(model: AuthModel): Observable<AuthModel> {
    return this.http.post<AuthModel>(this.url + '/login', model);
  }
}
