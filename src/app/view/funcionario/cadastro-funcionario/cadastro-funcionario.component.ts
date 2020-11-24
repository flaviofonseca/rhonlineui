import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CadastroFuncionarioComponent implements OnInit {

  formGroup: FormGroup;

  constructor(formBuilder: FormBuilder) {

    this.formGroup = formBuilder.group({
      id: [],
      cpf: [],
      nome: [null, Validators.required],
      matricula: [null, Validators.required],
      dataAdmissao: [null, Validators.required]
    });

    this.formGroup.get(`id`).disable();
  }

  ngOnInit(): void {
  }

  procurar(event) {

  }
}
