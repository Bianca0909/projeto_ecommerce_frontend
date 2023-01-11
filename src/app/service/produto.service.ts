import { ProdutoModel } from './../model/produto-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  url = 'http://localhost:8080/produto/'

  constructor(private http: HttpClient) { }

  create(model: ProdutoModel): Observable<ProdutoModel> {
    return this.http.post<ProdutoModel>(this.url, model);
  }

  update(model: ProdutoModel, id: string): Observable<ProdutoModel> {
    return this.http.put<ProdutoModel>(this.url + `/${id}`, model);
  }

  readAll(): Observable<ProdutoModel[]> {
    return this.http.get<ProdutoModel[]>(this.url);
  }

  delete(id: string): Observable<ProdutoModel> {
    return this.http.delete<ProdutoModel>(this.url + `/${id}`);
  }

  findByNome(nome: string): Observable<ProdutoModel[]> {
    return this.http.get<ProdutoModel[]>(this.url + `/${nome}`);
  }

  findByCaracter(caracter: string): Observable<ProdutoModel[]> {
    return this.http.get<ProdutoModel[]>(this.url + `/${caracter}`);
  }

  findByFavorito(favorito: string): Observable<ProdutoModel[]> {
    return this.http.get<ProdutoModel[]>(this.url + `/${favorito}`);
  }
}
