import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Endereco } from '../../models/endereco';

@Component({
  selector: 'app-endereco-component',
  templateUrl: './endereco-component.component.html',
  styleUrls: ['./endereco-component.component.css']
})
export class EnderecoComponentComponent implements OnInit {

  @Input() EnderecoRecebido: Endereco;
  EndViaCep: FormGroup;

  constructor( private fb: FormBuilder) { }

  ngOnInit() 
  {
    this.EndViaCep =  this.fb.group(
      {
         logradouro: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
         complemento:[''],
         bairro:['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
         localidade: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
         uf: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
         ibge: [''],
         gia: [''],
         ddd: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
         siafi: [''],
      });
  }

  mudarCidade(uf: string)
  {
    if(uf === 'SP')this.EnderecoRecebido.localidade = 'SUZANO';
    else if(uf === 'MG')this.EnderecoRecebido.localidade = 'CAMPOS GERAIS';
    else if(uf === 'Selecione')this.EnderecoRecebido.localidade = 'Selecione';
  }

}
