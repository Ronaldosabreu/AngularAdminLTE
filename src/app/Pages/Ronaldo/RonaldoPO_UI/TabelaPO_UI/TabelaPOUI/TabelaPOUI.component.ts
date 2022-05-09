import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { Subject } from 'rxjs';
import { TabelaService } from '../../../tabela/tabela.service';
import { Proposta } from '../../../tabela/tabela_module';

@Component({
  selector: 'app-TabelaPOUI',
  templateUrl: './TabelaPOUI.component.html',
  styleUrls: ['./table-poui.scss']
  
})
export class TabelaPOUIComponent implements OnInit {

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();

  tabelaPropostaObj: Proposta[];
  columns: PoTableColumn[]
 
  constructor(private service: TabelaService) { }

  ngOnInit() {
    this.service.consultaProposta().subscribe({
      next: (proposta)=>{
        this.tabelaPropostaObj = proposta
        this.dtTrigger.next(null);
       
      },
      complete: ()=>
      {
         this.columns = [
        { property: 'id_proposta', label: 'ID Proposta' },
        { property: 'cpf_cliente', label: 'CPF' },
        { property: 'datas.envio', label: 'DATA ENVIO', format: 'dd/MM/yyyy' },
        { property: 'valores.credito_solicitado', label: 'VALOR FINANCIADO',type: "currency", format: "BRL" },
        { property: 'valores.taxa_juros_anual', label: 'TAXA ANUAL' },
        {
           property: 'status.descricao_credito', type: 'label', width: '15%', label: 'STATUS DETALHADO',
           labels: [
            { value: 'Aguardando Análise', tooltip: 'Published component', color: 'color-11', label: 'Aguardando Análise' },
            { value: 'Aprovada automaticamente', color: 'color-08', label: 'Aprovada automaticamente' },
            { value: 'Aguardando Análise', color: 'color-07', label: 'Aguardando Análise' },
            { value: 'Aguardando Formalização', color: 'color-06', label: 'Aguardando Formalização' },
            { value: 'Proposta Recusada', color: 'color-05', label: 'Proposta Recusada' },
            { value: 'Proposta Interrompida', color: 'color-04', label: 'Proposta Interrompida' },	
            { value: 'Aprovação Condicionada', color: 'color-04', label: 'Aprovação Condicionada' },	
            
          ]
        },  
        { property: 'canal_entrada', label: 'CANAL DE ENTRADA' },  
        { property: 'produto', label: 'PRODUTO' },  
      ];
        
      },
      error: ()=>
      {

      }
    });
  }

}
