import { Observable } from 'rxjs';
import { MarcaModel } from './../model/marca-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  url = 'http://localhost:8080/marca/'

  constructor(private http: HttpClient) {}

  create(model: MarcaModel): Observable<MarcaModel> {
    return this.http.post<MarcaModel>(this.url, model);
  }

  update(model: MarcaModel, id: string): Observable<MarcaModel> {
    return this.http.put<MarcaModel>(this.url + `${id}`, model);
  }

  delete(id: number): Observable<MarcaModel> {
    return this.http.delete<MarcaModel>(this.url + `/${id}`);
  }

  readAll(): Observable<MarcaModel[]> {
    return this.http.get<MarcaModel[]>(this.url);
  }

  findByName(nome: string): Observable<MarcaModel[]> {
    return this.http.get<MarcaModel[]>(this.url + `/${nome}`);
  }
}
