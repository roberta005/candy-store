import { Component, OnInit } from '@angular/core';
import { IProduct, products } from '../products';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: IProduct[] |undefined;
  constructor(
    private ProductsService: ProductsService,
    private route : ActivatedRoute
  ) { 

  }

  ngOnInit(): void {
    const products = this.ProductsService.getAll();
    this.route.queryParamMap.subscribe(params =>{
      const descricao = params.get("descricao")?.toLowerCase();
    

      if(descricao){
        this.products = products.filter(produto => produto.descricao.toLowerCase().includes(descricao));
        return;
      }


      this.products = products
    });
  }

}
