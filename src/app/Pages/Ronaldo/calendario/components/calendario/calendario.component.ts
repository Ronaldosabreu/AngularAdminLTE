import { Component, OnInit } from '@angular/core';
import { Calendario } from '../../../models/calendario';
import { Dia_da_Semana } from '../../../models/dia_da_Semana';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit {

  constructor() { }
  
  dataAtual: Date = new Date();
  diasCalendario: Date[] = [];
  calendario: Calendario[] = [];
  mes: number;
  dia_da_Semana = Dia_da_Semana;


  

  construirCalendario() 
  {
    this.calendario = [];

        const ano = this.dataAtual.getFullYear();
        

        const primeiroDiaDaSemana = 0; // domingo
        const ultimoDiaDaSemana = 6; // sábado

        // Vai subtraindo -1 até chegarmos no primeiro dia da semana
        const dataInicial = new Date(ano, this.mes, 1);
        while (dataInicial.getDay() !== primeiroDiaDaSemana) 
        {
          dataInicial.setDate(dataInicial.getDate() - 1);
        }

        // Vai somando +1 até chegarmos no último dia da semana
        const dataFinal = new Date(ano, this.mes + 1, 0);
        while (dataFinal.getDay() !== ultimoDiaDaSemana) 
        {
          dataFinal.setDate(dataFinal.getDate() + 1);
        }

        this.diasCalendario = [];
        for ( let data = new Date(dataInicial.getTime()); data <= dataFinal; data.setDate(data.getDate() + 1)) 
        {
          this.diasCalendario.push(new Date(data.getTime()));

          const dia: number = new Date(data.getTime()).getDate();
          const mes: number = new Date(data.getTime()).getMonth();
          const ano: number = new Date(data.getTime()).getFullYear();

          let mes_atual=false;
         
          if (mes == this.mes)
            mes_atual = true;
          
          this.calendario.push({
                            dia_mes: dia,
                            dia_semama: new Date(data.getTime()).getDay(),
                            selecionado: false,
                            ano: ano,
                            mes: mes,
                            mes_atual: mes_atual
                          })
          console.log("----"+mes_atual);
        }
        
  }

  selecionaDia(dia: Calendario)
  {

      if(dia.dia_semama == this.dia_da_Semana.Dom || dia.dia_semama == this.dia_da_Semana.Sab)
        return


        if (dia.mes == this.mes)
        {
          if (dia.selecionado==false)
            dia.selecionado = true;
          else
            dia.selecionado = false;
        }
        console.log(dia)
  }

  ngOnInit(): void 
  {
    this.mes = this.dataAtual.getMonth();
    this.construirCalendario();
  }


  getDayOfWeek(numero: number) 
  {
    switch (numero) {
        case this.dia_da_Semana.Dom:
            return 'Dom'
            break;
        case this.dia_da_Semana.Seg:
          return 'Seg'
          break;
        case this.dia_da_Semana.Ter:
          return 'Ter'
          break;
        case this.dia_da_Semana.Qua:
          return 'Qua'
          break;
        case this.dia_da_Semana.Qui:
          return 'Qui'
          break;
        case this.dia_da_Semana.Sex:
          return 'Sex'
          break;
        case this.dia_da_Semana.Sab:
          return 'Sáb'
          break;
        default:
            return '';
            break;  
    }
}

  MesSelecionado(mes: any)
  {
    this.mes = mes;
    console.log(mes+"--------------------------");
    this.construirCalendario();
  }
}
