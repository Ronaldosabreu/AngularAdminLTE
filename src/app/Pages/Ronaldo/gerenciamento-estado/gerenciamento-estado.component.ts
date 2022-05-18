import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Decrement, Increment } from './ngrxcontador';

@Component({
  selector: 'app-gerenciamento-estado',
  templateUrl: './gerenciamento-estado.component.html',
  styleUrls: ['./gerenciamento-estado.component.scss']
})
export class GerenciamentoEstadoComponent implements OnInit {

  public contador$: Observable<any>;

  constructor(private store: Store<{counterReducer:  number}>) 
  { 
  
  }

  ngOnInit() {
    this.contador$ = this.store.select('counterReducer')
      
  }

  public incrementar(): void { // Altera nosso Estado aumentando um número
    this.store.dispatch(new Increment())
   
  }

  public decrementar(): void { // Altera nosso Estado removendo um número
    this.store.dispatch(new Decrement())
  
  }

}
