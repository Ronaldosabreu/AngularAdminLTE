import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Promise',
  templateUrl: './Promise.component.html',
  styleUrls: ['./Promise.component.scss']
})
export class PromiseComponent implements OnInit {
  title =   'Ronaldo'
  resultPromise: string;
  constructor() { }

  minhaPromise(nome: String) : Promise<string>
  {
    return new Promise((resolve, reject) =>
    {
      if (nome === 'Ronaldo')
      {
          setTimeout(() => {
            resolve('Seja Bem Vindo ' + nome)
          }, 1000);
      }
      else
      {
          reject (`Ops, ${nome} não é  o Ronaldo `);
      }
    })
  }

  ngOnInit() 
  {
    this.minhaPromise(this.title)
    .then(result =>{
      console.log(result);
      this.resultPromise = result
    })
    .catch(erro => {
      console.log(erro);
      this.resultPromise = erro
    })
  }

}
