import { Component, DebugElement, OnInit } from '@angular/core';
import { Calendario } from '../../../models/calendario';
import { Dia_da_Semana } from '../../../models/dia_da_Semana';
import { meses_enum } from '../../../models/meses_enum.mode.';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit {

  constructor() {
    this.montaMesBotao();
  }
  
  mes: any;

  dataAtual: Date = new Date();
  diasCalendario: Date[] = [];
  calendario: Calendario[] = [];
  dia_da_Semana = Dia_da_Semana;
  
  mesesEnum = meses_enum;
  
  mesesBotao: any;

  mesesMock: any =[
   {
      mes: "Agosto",
      ano: 2022
    },{
      mes: "Setembro",
      ano: 2022
    },{
      mes: "Outubro",
      ano: 2022
    },{
      mes: "Novembro",
      ano: 2022
    },{
      mes: "Dezembro",
      ano: 2022
    },{
      mes: "Janeiro",
      ano: 2023
    }
  ];

  montaMesBotao()
  {
    this.mesesBotao=[];
    this.mesesBotao.push(
      {
         data: this.mesesEnum[Number(this.getMoth(this.mesesMock[0].mes))],
         mes: Number(this.getMoth(this.mesesMock[0].mes)),
         ano: this.mesesMock[0].ano
      },
      { 
        data: this.mesesEnum[Number(this.getMoth(this.mesesMock[1].mes))],
        mes: Number(this.getMoth(this.mesesMock[1].mes)),
        ano: this.mesesMock[1].ano
      }
    );
  }
    

  construirCalendario(mes: any, ano: any) 
  {
    this.calendario = [];

        // const ano = this.dataAtual.getFullYear();
        const primeiroDiaDaSemana = 0; // domingo
        const ultimoDiaDaSemana = 6; // sábado

        // Vai subtraindo -1 até chegarmos no primeiro dia da semana
        const dataInicial = new Date(ano, mes, 1);
        while (dataInicial.getDay() !== primeiroDiaDaSemana) 
          dataInicial.setDate(dataInicial.getDate() - 1);

        // Vai somando +1 até chegarmos no último dia da semana
        const dataFinal = new Date(ano, mes + 1, 0);
        while (dataFinal.getDay() !== ultimoDiaDaSemana) 
          dataFinal.setDate(dataFinal.getDate() + 1);

        this.diasCalendario = [];
        for ( let data = new Date(dataInicial.getTime()); data <= dataFinal; data.setDate(data.getDate() + 1)) 
        {
          this.diasCalendario.push(new Date(data.getTime()));

          const dia: number = new Date(data.getTime()).getDate();
          const ano: number = new Date(data.getTime()).getFullYear();

          let mes_atual=false;
         
          this.calendario.push({
                            dia_mes: dia,
                            dia_semama: new Date(data.getTime()).getDay(),
                            selecionado: false,
                            ano: ano,
                            mes: mes,
                            mes_atual: mes_atual
                          })
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
  }

  ngOnInit(): void 
  {
    this.mes = this.dataAtual.getMonth();

    this.construirCalendario(this.dataAtual.getMonth(), 2022);
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

getMoth(mes: string) 
{
  switch (mes) {
      case "Janeiro":
          return this.mesesEnum.Janeiro
          break;
      case "Feveiro":
        return this.mesesEnum.Fevereiro
        break;
      case "Março":
        return this.mesesEnum.Março
        break;
      case "Abril":
        return this.mesesEnum.Abril
        break;
      case "Maio":
        return this.mesesEnum.Maio
        break;
      case "Junho":
        return this.mesesEnum.Junho
        break;
      case "Julho":
        return this.mesesEnum.Julho
        break;
      case "Agosto":
        return this.mesesEnum.Agosto
        break;
      case "Setembro":
        return this.mesesEnum.Setembro
        break;
      case "Outubro":
        return this.mesesEnum.Outubro
        break;
      case "Novembro":
        return this.mesesEnum.Novembro
        break;
      case "Dezembro":
        return this.mesesEnum.Dezembro
        break;
      default:
          return '';
          break;  
  }
}

avancaMes()
{
    
    let mes = this.mesesBotao.pop();
    debugger

    this.construirCalendario(mes.mes, mes.ano);
    
    let buscames = this.mesesMock.findIndex((me: any) => me.mes == mes.data)
    
    debugger
    if (buscames+1 == this.mesesMock.length)
    {
      this.mesesBotao=[];
      this.mesesBotao.push(
        {
          data: this.mesesEnum[Number(this.getMoth(this.mesesMock[buscames].mes))],
          mes: Number(this.getMoth(this.mesesMock[buscames].mes)),
          ano: this.mesesMock[buscames].ano
        }
      );
    }
    else{

      this.mesesBotao=[];
      this.mesesBotao.push(
        {
          data: this.mesesEnum[Number(this.getMoth(this.mesesMock[buscames].mes))],
          mes: Number(this.getMoth(this.mesesMock[buscames].mes)),
          ano: this.mesesMock[buscames].ano
        },
        { 
          data: this.mesesEnum[Number(this.getMoth(this.mesesMock[buscames+1].mes))],
          mes: Number(this.getMoth(this.mesesMock[buscames+1].mes)),
          ano: this.mesesMock[buscames+1].ano
        }
      );
    }
  }





  voltaMes()
  {
      
      let mes = this.mesesBotao.shift();
      let buscames = this.mesesMock.findIndex((me: any) => me.mes == mes.data)
      
      debugger      
      if (buscames!=0)
        {
          debugger      

          this.construirCalendario(mes.mes, mes.ano);
          this.mesesBotao=[];
          this.mesesBotao.push(
            {
              data: this.mesesEnum[Number(this.getMoth(this.mesesMock[buscames-1].mes))],
              mes: Number(this.getMoth(this.mesesMock[buscames-1].mes)),
              ano: this.mesesMock[buscames-1].ano
            },
            { 
              data: this.mesesEnum[Number(this.getMoth(this.mesesMock[buscames].mes))],
              mes: Number(this.getMoth(this.mesesMock[buscames].mes)),
              ano: this.mesesMock[buscames].ano
            }
          );
        }
    }
}
