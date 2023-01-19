import { CategoriaModel } from "./categoria-model";
import { MarcaModel } from "./marca-model";

export interface ProdutoModel{
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  marca: MarcaModel;
  categoria: CategoriaModel;
  quantidade: number;
  produtoVitrine: boolean;
  produtoPromocao: boolean;
  desconto: number;
  dataInicialPromocao: Date;
  dataFinalPromocao: Date;
  imagem: string;
  favorito: boolean;
}
