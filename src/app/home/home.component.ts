import { ProdutoService } from './../service/produto.service';
import { ProdutoModel } from './../model/produto-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  list: ProdutoModel[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  // favoritar(id: number) {
  //   let produtoFavoritado = this.produtoService.findById(id);
  //   let abc = produtoFavoritado.subscribe((p) => (p.favorito = true));
  // }

  private carregarProdutos(): void {
    this.produtoService.readAll().subscribe((produtos: ProdutoModel[]) => {
      this.list = produtos;
      console.log(this.list);
    });
  }
}
