import { CategoriaModel } from './../model/categoria-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  url = 'http://localhost:8080/marca/'

  constructor(private http: HttpClient) {}

  create(model: CategoriaModel): Observable<CategoriaModel> {
    return this.http.post<CategoriaModel>(this.url, model);
  }

  update(model: CategoriaModel, id: string): Observable<CategoriaModel> {
    return this.http.put<CategoriaModel>(this.url + `${id}`, model);
  }

  delete(id: number): Observable<CategoriaModel> {
    return this.http.delete<CategoriaModel>(this.url + `/${id}`);
  }

  readAll(): Observable<CategoriaModel[]> {
    return this.http.get<CategoriaModel[]>(this.url);
  }

  findByName(nome: string): Observable<CategoriaModel[]> {
    return this.http.get<CategoriaModel[]>(this.url + `/${nome}`);
  }
}
