import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepServiceService {

constructor(private http: HttpClient) { }

  consultaCep(cep: string)
  {
     return this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/`)
  }

}
