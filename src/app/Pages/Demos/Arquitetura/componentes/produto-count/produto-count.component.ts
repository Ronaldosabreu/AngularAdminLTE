import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-produto-count',
  templateUrl: './produto-count.component.html',
  styleUrls: ['./produto-count.component.scss']
})
export class ProdutoCountComponent implements OnInit {


  @Input()
  produtos: Produto[];

  constructor() { }

  ngOnInit() {
  }

  contadorAtivos(): number{
    if(!this.produtos) return 0;

    return this.produtos.filter((produto: Produto) => produto.ativo).length;
  }

}
