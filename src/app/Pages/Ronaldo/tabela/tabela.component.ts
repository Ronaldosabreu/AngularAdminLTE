import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TabelaService } from './tabela.service';
import { Proposta } from './tabela_module';


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

      pagingType: 'full_numbers',
      pageLength: 5,
      order: [[2, 'desc']],
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
