import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoDadhsboardComponent } from './produto-dadhsboard/produto-dadhsboard.component';


export const produtoRoutes: Routes = 
[
    {
        path:'', component: ProdutoDadhsboardComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(produtoRoutes)],
    exports: [RouterModule]
  })
  export class ProdutoRoutingModule { }