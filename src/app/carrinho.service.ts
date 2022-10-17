import { IProductCart, products } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProductCart[] = []

  constructor() { }

  obtemCarrinho(){
    this.itens =  JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
    
  }
  adicionarAoCarrinho(product:IProductCart){
    this.itens.push(product);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }
  limparCarrinho(){
    this.itens = []
    localStorage.clear()
  }

  removerProdutosCarrinho(produtoId:number){
    this.itens = this.itens.filter(item => item.id != produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }
  }





