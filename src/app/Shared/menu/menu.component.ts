import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { interval, Observable } from 'rxjs';
import { EditarParam } from 'src/app/Utils/gerenciamentoEstadoMenu';
import { Menu } from './menu';
import { MenusService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  
  objetoEstado$:  Observable<any> = this.store.pipe(select('counterReducer'))
  menu$:  Observable<Menu[]> = this.storeMenu.pipe(select('reducerMenu'))

  constructor(private menuService: MenusService,
      private store: Store<{counterReducer:  any}>,
      private storeMenu: Store<{reducerMenu:  Menu[]}>
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
    this.objetoEstado$.subscribe((e)=>{
      count = e.counter
    })
    if (count <= 0)return 'qtd'
    else return 'qtd-'

  }

  carregarMenu() {
      this.menuService.obterMenus().subscribe({
        next: (data) => {
          
          this.storeMenu.dispatch(EditarParam({menu: data}))

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
