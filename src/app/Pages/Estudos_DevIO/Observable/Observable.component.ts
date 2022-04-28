import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-Observable',
  templateUrl: './Observable.component.html',
  styleUrls: ['./Observable.component.scss']
})
export class ObservableComponent implements OnInit {

  title =   'Ronaldo'
  resultPromise: string;
  constructor() { }

  minhaObservable(nome: String) : Observable<string>
  {
   return new Observable(subscriber => 
    {

      if(nome ==="Ronaldo")
      {   
        subscriber.next('Olá!');
        setTimeout(() => {
          subscriber.next('Olá de novo 222!');
        }, 1000);
      }
      else
      {
        subscriber.error('Ops erro na subscribe')
      }
    }
   )
   
  }

  ngOnInit() 
  {
    this.minhaObservable(this.title).subscribe(
      result => console.log(result), 
      erro => console.log(erro), 
      () => console.log('FIM')
    );
  }
}
