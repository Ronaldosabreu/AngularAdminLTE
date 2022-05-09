import { Component, OnInit } from '@angular/core';
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
  constructor(private menuService: MenusService) { }
  

  postMenu(): void 
  {

    this.menu = {
      admin: true,
    exact: true,
    link: "/teste",
    name: "TESTE CRIADO"
    }

    this.menuService.post(this.menu).subscribe(() =>
    {
      alert("Inserido com sucesso");
    });
  };

  updateMenu(): void 
  {

    this.menu = {
      admin: true,
    exact: true,
    link: "/teste",
    name: "TESTE ALTERADO ---"
    }

    this.menuService.update('w5cWm6c', this.menu).subscribe(() =>
    {
      alert("Inserido com sucesso");
    });
  };

  deleteMenu(): void 
  {
    this.menuService.delete('w5cWm6c').subscribe(() =>
    {
      alert("Inserido com sucesso");
    });
  };


  ngOnInit() 
  {
      
  }
}
