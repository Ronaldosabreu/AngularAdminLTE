import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProdutoCardDetalheComponent } from "./componentes/produto-card-detalhe/produto-card-detalhe.component";
import { ProdutoCountComponent } from "./componentes/produto-count/produto-count.component";
import { ProdutoDadhsboardComponent } from "./produto-dadhsboard/produto-dadhsboard.component";
import { ProdutoRoutingModule } from "./produto.route";


@NgModule
({
        declarations: [
            ProdutoDadhsboardComponent,
            ProdutoCardDetalheComponent,
            ProdutoCountComponent
        ],
        imports:
        [
            CommonModule,
            RouterModule,
            ProdutoRoutingModule
        ],
        exports:[]
})

export class ProdutoModule{}