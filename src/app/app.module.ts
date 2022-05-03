import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './Pages/Demos/ReactiveForms/Cadastro/Cadastro.component';
import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation';
import { NavegacaoModule } from './Shared/navegacao.module';


// **************************************************
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TabelaComponent } from './Pages/Ronaldo/tabela/tabela.component';
import { DataTablesModule } from 'angular-datatables';
import { PipeTransformCPF } from './Utils/pipeTransform.pipe';


registerLocaleData(ptBr);
// **************************************************

@NgModule({
  declarations: [	
    AppComponent,
      CadastroComponent,
      TabelaComponent,
      PipeTransformCPF
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    NavegacaoModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [
     // ************************************
     { provide: LOCALE_ID, useValue: 'pt' },
     // ************************************
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
