import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-produto-card-detalhe',
  templateUrl: './produto-card-detalhe.component.html',
  styleUrls: ['./produto-card-detalhe.component.scss']
})
export class ProdutoCardDetalheComponent implements OnInit {



  @Input() 
  produto: Produto;

  @Output()
  status: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitirEvento()
  {
      this.status.emit(this.produto);
  }

}
