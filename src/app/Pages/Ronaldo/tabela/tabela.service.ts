import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proposta } from './tabela_module';

@Injectable({
  providedIn: 'root'
})
export class TabelaService 
{

constructor(private http: HttpClient) { }

  consultaProposta(): Observable<Proposta[]>
  {
      return this.http.get<Proposta[]>(`http://localhost:3000/propostas`)
  }

}
