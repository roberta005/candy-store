import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Carrinho2Component } from './carrinho2.component';

const routes: Routes = [{ path: '', component: Carrinho2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Carrinho2RoutingModule { }
