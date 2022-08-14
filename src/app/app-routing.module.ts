import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './Pages/Estudos_DevIO/contato/contato.component';
import { CadastroComponent } from './Pages/Demos/ReactiveForms/Cadastro/Cadastro.component';
import { ObservableComponent } from './Pages/Estudos_DevIO/Observable/Observable.component';
import { PromiseComponent } from './Pages/Estudos_DevIO/Promise/Promise.component';
import { HomeComponent } from './Shared/home/home.component';
import { TabelaComponent } from './Pages/Ronaldo/tabela/tabela.component';
import { GerenciamentoEstadoComponent } from './Pages/Ronaldo/gerenciamento-estado/gerenciamento-estado.component';

export const routes: Routes = [
  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'promise',component: PromiseComponent},
  {path:'observable',component: ObservableComponent},
  {path:'contato',component: ContatoComponent},
  {path:'tabela',component: TabelaComponent},
  {path:'cadastro',component: CadastroComponent},
  {path:'gerenciamento',component: GerenciamentoEstadoComponent},
  {
    path: 'produtos', 
    loadChildren: () => import('./Pages/Demos/Arquitetura/produto.module')
    .then(m=>m.ProdutoModule)
  },
  {
    path: 'cep', 
    loadChildren: () => import('./Pages/Ronaldo/cep-module/cep-module.module')
    .then(m=>m.CepModuleModule)
  },
  {
    path: 'calendario', 
    loadChildren: () => import('./Pages/Ronaldo/calendario/components/calendario.module')
    .then(m=>m.CalendarioModule)
  },
  {
    path: 'tabelapo_ui', 
    loadChildren: () => import('./Pages/Ronaldo/RonaldoPO_UI/TabelaPO_UI/TabelaPO_UI.module')
    .then(m=>m.TabelaPO_UIModule)
  },
  
  // {path: 'menu', component: MenuComponent,
  //                 children: [
  //                   {
  //                       path: 'home',
  //                       component: HomeComponent
  //                   },
  //                   {
  //                     path: 'imagens',
  //                     component: ImagensComponent
  //                 }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
