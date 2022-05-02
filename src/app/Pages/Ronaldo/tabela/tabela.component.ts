import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { TabelaService } from './tabela.service';
import { Proposta } from './tabela_module';
import { DataTableDirective } from 'angular-datatables';
import { Produto } from '../../Demos/Arquitetura/models/produto';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit 
{
 
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();

  tabelaPropostaObj: Proposta[];
  
  produtosSelect: string[];
  statusDetalhadoSelectObj: string[];
  statusDetalhadoSelected:string;

  countDescricaoCredito: number = 0;

  

  @ViewChild(DataTableDirective, {static: false})
  datatableElement: DataTableDirective;
  
  constructor(private service: TabelaService) 
  {
   
  }


  ngOnInit() 
  {

    this.dtOptions = 
    {
    
      pagingType: 'full_numbers',
      pageLength: 5,
      order: [[0, 'desc']],
      responsive: true,
      "language": {
                    "url": "https://cdn.datatables.net/plug-ins/1.11.5/i18n/pt-BR.json"
                  },
      dom: 'Blfrtip',
      buttons: [
        // 'columnsToggle',
        'colvis',
        'copy',
        'print',
        'excel',
      ],
    //   "columnDefs": [
    //     {
    //         "targets": [ 0 ],
    //         "visible": true,
    //         "searchable": true
    //     },
    //     {
    //         "targets": [ 0 ],
    //         "visible": true
    //     }
    // ],
    // columns: [
    //   {
    //     title: 'id_proposta',
    //     data: 'id_proposta'
    //   },
    //   {
    //     title: 'cpf_cliente',
    //     data: 'cpf_cliente'
    //   },
    //   {
    //     title: 'envio',
    //     data: 'envio'
    //   },
    //   {
    //     title: 'credito_solicitado',
    //     data: 'credito_solicitado'
    //   },
    //   {
    //     title: 'taxa_juros_anual',
    //     data: 'taxa_juros_anual'
    //   },
    //   {
    //     title: 'descricao_credito',
    //     data: 'descricao_credito'
    //   },
    //   {
    //     title: 'canal_entrada',
    //     data: 'canal_entrada'
    //   },
    //   {
    //     title: 'produto',
    //     data: 'produto'
    //   },
    // ]

    };
  this.consultarTabela()
  }

mudarSelectStatusDetalhado(valor: string)
{
  this.statusDetalhadoSelected = valor;
  this.buscarStatusDetalhado(valor)

}

  consultarTabela()
  {

    this.service.consultaProposta().subscribe({
      next: (proposta)=>{
        this.tabelaPropostaObj = proposta
        this.dtTrigger.next(null);
      },
      complete: ()=>{
        this.popularSelectProduto()
        this.StatusDetalhadoSelect();
      },
      error: ()=>{}
    });

  }

  
  popularSelectProduto()
  {
    var produto:any = [];
    this.tabelaPropostaObj.forEach((e)=>{ produto.push(e.produto) });

    this.produtosSelect = produto.filter(function(este:string, i:string) {
        return produto.indexOf(este) === i;
    });
  }

    
  StatusDetalhadoSelect()
  {
    var descricao_credito:any = [];
    
    this.tabelaPropostaObj.forEach(
      (e)=>
      {
         descricao_credito.push(e.status.descricao_credito) 

         if (e.status.descricao_credito ==="Aprovada automaticamente")
         {
                  this.countDescricaoCredito = this.countDescricaoCredito + 1
         }
      });

    this.statusDetalhadoSelectObj = descricao_credito.filter(function(este:string, i:string) {
        return descricao_credito.indexOf(este) === i;
    });
  }

  buscarStatusDetalhado(valor: any)
  {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => 
    {
      if (valor == '-1')
          dtInstance.columns(5).search('').draw();
      else
          dtInstance.columns(5).search(valor).draw();
    });
    this.statusDetalhadoSelected = valor;
  }

  buscarProdutoProposta(valor: any)
  {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => 
    {
      if (valor.value == '-1')
          dtInstance.columns(7).search('').draw();
      else
          dtInstance.columns(7).search(valor.value).draw();
    });
  }

  buscarIdProposta(valor: any)
  {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => 
    {
          dtInstance.columns(0).search(valor.value).draw();
    });
  }

  ngOnDestroy(): void 
  {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
