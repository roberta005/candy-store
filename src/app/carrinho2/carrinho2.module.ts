import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Carrinho2RoutingModule } from './carrinho2-routing.module';
import { Carrinho2Component } from './carrinho2.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Carrinho2Component
  ],
  imports: [
    CommonModule,
    Carrinho2RoutingModule,
    FormsModule
  ]
})
export class Carrinho2Module { }
