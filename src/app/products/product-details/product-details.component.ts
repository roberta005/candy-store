import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { IProduct, IProductCart } from '../../products';
import { ActivatedRoute } from '@angular/router';
import { NotificacaoService } from '../../notificacao.service';
import { CarrinhoService } from '../../carrinho.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
product: IProduct | undefined;
quantidade = 1;
  constructor(
    private ProductsService: ProductsService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get("id"))
    this.product = this.ProductsService.getOne(productId)
  }

adicionarAoCarrinho(){
  this.notificacaoService.notificar("O produto foi adicionado ao carrinho");
  const product: IProductCart = {
    ...this.product!,
    quantidade: this.quantidade

  }
  this.carrinhoService.adicionarAoCarrinho(product);
}

}
