import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CepComponentComponent } from './cep-component/cep-component.component';
import { RouterModule } from '@angular/router';
import { CepRoutes } from '../cep-route.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnderecoComponentComponent } from './endereco-component/endereco-component.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CepRoutes,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: 
  [
    CepComponentComponent,
    EnderecoComponentComponent
  ]
})
export class CepModuleModule { }
