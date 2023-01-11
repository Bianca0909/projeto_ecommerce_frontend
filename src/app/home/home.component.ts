import { ProdutoService } from './../service/produto.service';
import { ProdutoModel } from './../model/produto-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
list: ProdutoModel[] = [];

constructor(private produtoService: ProdutoService) {}

ngOnInit(): void {
  this.carregarProdutos();
}

private carregarProdutos(): void {
  this.produtoService.readAll().subscribe((produtos: ProdutoModel[]) => {
    this.list = produtos;
  })
}

}
