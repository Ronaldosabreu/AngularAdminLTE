import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Endereco } from '../../models/endereco';
import { CepServiceService } from '../cep-service.service';

@Component({
  selector: 'app-cep-component',
  templateUrl: './cep-component.component.html',
  styleUrls: ['./cep-component.component.scss']
})
export class CepComponentComponent implements OnInit {

  inputText_cep = new FormControl('08615050',[Validators.required]);
  EnderecoObj: Endereco;
  loading: boolean;


  constructor(private service: CepServiceService, private cdref: ChangeDetectorRef) { }

  ngOnInit() 
  {


  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  buscarCep()
  {
    this.loading = true;  

    this.EnderecoObj = new Endereco();
  
     this.service.consultaCep(this.inputText_cep.value).subscribe({
       next: (Endereco: Endereco) =>  
       { 
         
          this.EnderecoObj = Endereco;
       },
       complete: () => 
       { 
        this.loading = false;
       },
       error: (erro: Error) => {
        this.loading = false;
        }
     });
  }
}