import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Menu } from './menu';
import { MenusService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menus: Menu[];


  constructor(private menuService: MenusService) { }

  ngOnInit(): void 
  {
    this.carregarMenu();

    interval(1000).subscribe((x) => this.carregarMenu());
    
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
