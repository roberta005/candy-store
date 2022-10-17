import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProductCart } from '../products';

@Component({
  selector: 'app-carrinho2',
  templateUrl: './carrinho2.component.html',
  styleUrls: ['./carrinho2.component.css']
})
export class Carrinho2Component implements OnInit {
  itensCarrinho:IProductCart[] = [];
  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calculaTotal();
  }

  calculaTotal(){
    this.total = this.itensCarrinho.reduce((prev,curr)=> prev + (curr.preco *curr.quantidade),0)
  }
  removeProdutosCarrinho(produtoId:number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutosCarrinho(produtoId);
    this.calculaTotal();
  }
  comprar(){
    alert("Parabéns, você finalizou sua compra!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"])

  }

}
