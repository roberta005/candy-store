import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

const routes: Routes = [{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
{path:"", redirectTo:"products", pathMatch:"full"},
{ path: 'carrinho', loadChildren: () => import('./carrinho2/carrinho2.module').then(m => m.Carrinho2Module) },
{ path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },
{path:"**", component: NaoEncontradoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
