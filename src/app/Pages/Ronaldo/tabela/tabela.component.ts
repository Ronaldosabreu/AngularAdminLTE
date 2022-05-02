import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { TabelaService } from './tabela.service';
import { Proposta } from './tabela_module';
import { DataTableDirective } from 'angular-datatables';

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
  
  @ViewChild(DataTableDirective, {static: false})
  datatableElement: DataTableDirective;
  
  constructor(private service: TabelaService) 
  {
   
   }

  ngOnInit() 
  {
   this.consultarTabela()
  }

  consultarTabela()
  {

    this.dtOptions = 
    {
      columns: [
      {
        title: 'ID',
        data: 'id_proposta'
      },
      {
        title: 'cpf_cliente',
        data: 'cpf_cliente'
      },
      // {
      //   title: 'envio',
      //   data: 'p.datas.envio'
      // }, {
      //   title: 'credito_solicitado',
      //   data: 'p.valores.credito_solicitado'
      // },
      // {
      //   title: 'taxa_juros_anual',
      //   data: 'p.valores.taxa_juros_anual'
      // },
      // {
      //   title: 'canal_entrada',
      //   data: 'canal_entrada'
      // },
      // {
      //   title: 'produto',
      //   data: 'produto'
      // },
    ],
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
        'excel',]
    };
  
    this.service.consultaProposta().subscribe({
      next: (proposta)=>{
        this.tabelaPropostaObj = proposta

        this.dtTrigger.next(null);

        this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => 
        {
          dtInstance.columns().every(function () {
            const that = this;
            $('#search-id').on('keyup', function () 
            {
              const inputElement = document.getElementById('search-id') as HTMLInputElement

              if (that.search() !== inputElement.value) 
              {
                that
                  .search(inputElement.value)
                  .draw();
              }
            });
          });
        });

      },
      complete: ()=>{},
      error: ()=>{}
    });
  }


  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
