import { AuthModel } from './../model/auth-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponseModel } from '../model/login-response-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:8080/auth'

  constructor(private http: HttpClient) {}

  signIn(model: AuthModel): Observable<LoginResponseModel> {
    return this.http.post<LoginResponseModel>(this.url + '/login', model);
  }
}
