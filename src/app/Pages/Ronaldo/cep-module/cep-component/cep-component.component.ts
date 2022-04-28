import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Endereco } from '../../models/endereco';
import { CepServiceService } from '../cep-service.service';

@Component({
  selector: 'app-cep-component',
  templateUrl: './cep-component.component.html',
  styleUrls: ['./cep-component.component.scss']
})
export class CepComponentComponent implements OnInit {

  cep = new FormControl('08615050',[Validators.required]);
  EnderecoObj: Endereco;

  constructor(private service: CepServiceService) { }

  ngOnInit() 
  {


  }

  buscarCep()
  {
    this.EnderecoObj = { cep:"", bairro:"",
                        complemento:"",
                        ddd:"",
                        gia:"",
                        ibge:"",
                        localidade:"",
                        logradouro:"",
                        siafi:"",
                        uf:""
                      };
  
     this.service.consultaCep(this.cep.value).subscribe({
       next: (Endereco: Endereco) =>  
       { 
         
          this.EnderecoObj = Endereco;
       },
       complete: () => { 
        
       },
       error: (erro: Error) => { }
     });
  }
}