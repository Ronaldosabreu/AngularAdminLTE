import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Menu } from 'src/app/Shared/menu/menu';
import { MenusService } from 'src/app/Shared/menu/menu.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit 
{
  menu: Menu;
  Menus: Menu[];

  menuForm: FormGroup;

  menuIdClicado: string;
  menuClicadoExcluir: Menu;

  constructor(
      private menuService: MenusService, 
      private fb: FormBuilder,
      private storeMenu: Store<{reducerMenu:  Menu[]}>)
    { }
  ngOnInit() 
  {
    this.carregarMenu();

    this.menuForm =  this.fb.group(
      {
         name:['', Validators.required],
         link:[''],
      });
  }

  carregarMenu() 
  {
    this.menuService.obterMenus().subscribe({
      next: (data) =>
       {
         this.Menus = data;

        // this.storeMenu.dispatch(EditarParam({menu: data})) ////arrumar
      },
      error: (e) => {},
      complete: () => { },
    });
}

  postMenu(menu: Menu)
  {
    this.menuService.post(menu).subscribe(() =>
    {
      alert("Inserido com sucesso");
      this.carregarMenu();
    });

  };

  updateMenu(menu: Menu) 
  {
    menu.id = this.menuIdClicado;

    this.menuService.update(menu).subscribe({
      next: () => { },
      error: (e) => {},
      complete: () => {  this.carregarMenu();},
    });
}


  deleteItemMenuTabela()
  {
    this.menuService.delete(this.menuClicadoExcluir.id).subscribe(() =>
    {
      alert("Removido com sucesso");
      this.carregarMenu();
    });
  };


  populaTabelaMenu(menu: Menu)
  { 
    this.menuIdClicado = menu.id;
    this.menu = menu;
  }

  modalExcluir(menuItem: Menu)
  {
    this.menuClicadoExcluir = menuItem;
  }
}


