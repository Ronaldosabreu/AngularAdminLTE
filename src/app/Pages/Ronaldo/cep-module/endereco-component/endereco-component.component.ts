import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Endereco } from '../../models/endereco';

@Component({
  selector: 'app-endereco-component',
  templateUrl: './endereco-component.component.html',
  styleUrls: ['./endereco-component.component.css']
})
export class EnderecoComponentComponent implements OnInit {

  EnderecoObj: Endereco;
  EndViaCep: FormGroup;

  //receber dado do Pai
  @Input() set EnderecoRecebido(end: Endereco) 
   {
     this.EnderecoObj = end;
   }

   //enviar dado para o Pai
   @Output() enviarPataOPaiEmit: EventEmitter<Endereco> = new EventEmitter();

  constructor( private fb: FormBuilder) { }

  ngOnInit() 
  {

    this.EndViaCep =  this.fb.group(
      {
         logradouro: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
         complemento:[''],
         bairro:['', [Validators.required]],
         localidade: ['', [Validators.required]],
         uf:         ['', [Validators.required, Validators.minLength(2)]],
         ibge: [''],
         gia: [''],
         ddd: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
         siafi: [''],
      });
  }

  mudarCidade(uf: string)
  {
    if(uf === 'SP')this.EnderecoObj.localidade = 'SUZANO';
    else if(uf === 'MG')this.EnderecoObj.localidade = 'CAMPOS GERAIS';
    else if(uf === 'Selecione')this.EnderecoObj.localidade = 'Selecione';
  }

  EnviarParaOPaiCadEndereco()
  {
    this.enviarPataOPaiEmit.emit(this.EnderecoObj);
  }

}