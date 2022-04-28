import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Endereco } from '../../models/endereco';

@Component({
  selector: 'app-endereco-component',
  templateUrl: './endereco-component.component.html',
  styleUrls: ['./endereco-component.component.css']
})
export class EnderecoComponentComponent implements OnInit {

  @Input() EnderecoObj: Endereco;
  EndViaCep: FormGroup;

  constructor( private fb: FormBuilder) { }

  ngOnInit() 
  {
    this.EndViaCep =  this.fb.group(
      {
         logradouro: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
         complemento:['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
         bairro:['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
         localidade: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
         uf: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
         ibge: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
         gia: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
         ddd: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
         siafi: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      });
  }

  mudarCidade(uf: string)
  {
    if(uf === 'SP')
    {
    this.EnderecoObj.localidade = 'SUZANO';
    }
    else
    {this.EnderecoObj.localidade = 'CAMPOS GERAIS';}
  }

}
