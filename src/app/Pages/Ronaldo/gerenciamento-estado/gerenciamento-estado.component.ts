import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Decrement, Increment, IncrementParam, IncrementParamUser } from './ngrxcontador';

@Component({
  selector: 'app-gerenciamento-estado',
  templateUrl: './gerenciamento-estado.component.html',
  styleUrls: ['./gerenciamento-estado.component.scss']
})
export class GerenciamentoEstadoComponent implements OnInit {

  public objetoEstado$: Observable<any>;


  @ViewChild("nome") nome: ElementRef;

  constructor(private store: Store<{counterReducer:  any}>) 
  { }

  ngOnInit() 
  {
    this.objetoEstado$ = this.store.select('counterReducer')
  }

  public incrementarParam(): void { // Altera nosso Estado aumentando um número
    this.store.dispatch(IncrementParam({payloadNum: 3}))

    let nome = this.nome.nativeElement.value;
    this.store.dispatch(IncrementParamUser({payloadNum: nome}))
  }

  public incrementar(): void { // Altera nosso Estado aumentando um número
    this.store.dispatch(Increment())
   
  }

  public decrementar(): void { // Altera nosso Estado removendo um número
    this.store.dispatch(Decrement())
    }

}
