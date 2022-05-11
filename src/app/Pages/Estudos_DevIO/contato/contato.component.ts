import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(private menuService: MenusService, private fb: FormBuilder) { }
  ngOnInit() 
  {
    this.carregarMenu();

    this.menuForm =  this.fb.group(
      {
         id: [''],
         name:['', Validators.required],
         link:[''],
         
      });
  }

  carregarMenu() 
  {
    this.menuService.obterMenus().subscribe({
      next: (data) => { this.Menus = data;},
      error: (e) => {},
      complete: () => { },
    });
}

  postMenu(menu: Menu)
  {

    menu.id = Math.random() * 100 + 1+"";

    this.menuService.post(menu).subscribe(() =>
    {
      alert("Inserido com sucesso");
      this.carregarMenu();
    });

  };

  updateMenu(menu: Menu) 
  {
    
    this.menuService.update(menu.id, menu).subscribe(() =>
    {
      alert("Editado com sucesso");
      this.carregarMenu();
    });
  };

  deleteMenu(menu: Menu)
  {
    this.menuService.delete(menu.id).subscribe(() =>
    {
      alert("Removido com sucesso");
      this.carregarMenu();
    });
  };

  populaMenu(menu: Menu)
  {
    this.menu = menu;
  }

  
}


