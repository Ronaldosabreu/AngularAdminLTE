import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './models/usuario';
import { NgBrazilValidators } from 'ng-brazil';
import { MascaraUtil } from 'src/app/Utils/mask';
import { CustomValidators } from 'ng2-validation';
import { DisplayMessage, GenericValidator, ValidationMessages } from 'src/app/Utils/generic-form-validation';
import { fromEvent, merge, Observable } from 'rxjs';


@Component({
  selector: 'app-Cadastro',
  templateUrl: './Cadastro.component.html',
  styleUrls: ['./Cadastro.component.scss']
})
export class CadastroComponent implements OnInit, AfterViewInit {

@ViewChildren(FormControlName, {read: ElementRef}) formInputElements: ElementRef[];

  cadastroForm: FormGroup;
  usuario: Usuario;
  formResult: string ='';
  mascaraCpf = MascaraUtil.mascaraCpf;

  validationMensasages: ValidationMessages;
  genericValidador: GenericValidator;
  displayMessage: DisplayMessage = {};

  constructor(private fb: FormBuilder) {

      this.validationMensasages=
      {
          nome: {
              required: 'O nome é requerido',
              minlength: 'minimo 2 caracteres',
              maxlength: 'maximo 150 caracteres' 
          },
          selectUser: {
            required: 'selectUser  teste é requerido',
        }
      }

        this.genericValidador = new GenericValidator(this.validationMensasages);


   }
  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] =  this.formInputElements
                                                .map((formControl:ElementRef) =>
                                                fromEvent(formControl.nativeElement, 'blur') );

    merge(...controlBlurs).subscribe(() => {
        this.displayMessage =this.genericValidador.processarMensagens(this.cadastroForm)
    })

  }
    



  ngOnInit() 
  {
      // this.cadastroForm =  new FormGroup({
      //   nome: new FormControl(''),
      //   CPF: new FormControl(''),
      //   email: new FormControl(''),
      //   password: new FormControl(''),
      //   confirmPassword: new FormControl(''),
      //   selectUser: new FormControl(''),
      //   Check1: new FormControl(''),
      // });

        let senha  =  new FormControl('',[Validators.required, CustomValidators.rangeLength([6,15])])
        let confirmPassword  =  new FormControl('',
                                         [
                                            Validators.required, 
                                            CustomValidators.rangeLength([6,15]), 
                                            CustomValidators.equalTo(senha) 
                                        ]);

        this.cadastroForm =  this.fb.group({
            nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
            cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
            email: ['',[Validators.required, Validators.email]],
            password: senha,
            confirmPassword: confirmPassword,
            selectUser: ['',Validators.required],
            Check1: ['',Validators.required],
      });

  }

  adicionarUsuario()
  {

    if(this.cadastroForm.dirty && this.cadastroForm.valid)
    {
      let usuarioForm = this.cadastroForm.value;
      this.usuario = Object.assign({}, this.usuario, usuarioForm);

      this.formResult = JSON.stringify(usuarioForm);
      console.log(this.usuario)
      //console.log(this.formResult)
    }
  }

}
