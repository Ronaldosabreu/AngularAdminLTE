import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { interval, Observable } from 'rxjs';
import { Menu } from './menu';
import { MenusService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menus: Menu[];
  contador$:  Observable<any> = this.store.pipe(select('counterReducer'))

  constructor(private menuService: MenusService,
      private store: Store<{counterReducer:  number}>
     )
      { }

  ngOnInit(): void 
  {
    this.carregarMenu();

    // interval(1000).subscribe((x) => this.carregarMenu());
    
  }
  
  estiloCaixa()
  {
    let count: number = 0;
    this.contador$.subscribe((e)=>{
      count = e.counter
      console.log(e)
    })
    if (count <= 0)return 'qtd'
    else return 'qtd-'

  }

  carregarMenu() {
      this.menuService.obterMenus().subscribe({
        next: (data) => {
          this.menus = data;
          //console.log(data);
        },
        error: (e) => {
          //console.log(e);
        },
        complete: () => {
          //console.log('Requisição do menu completa');
        },
      });
  }
}
