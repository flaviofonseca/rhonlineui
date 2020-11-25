import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CidadeService } from 'src/app/service/cidade.service';
import { FuncionarioService } from 'src/app/service/funcionario.service';
import { PessoaService } from 'src/app/service/pessoa.service';
import { debounceTime, distinctUntilChanged, filter, finalize, switchMap } from 'rxjs/operators';
import { LoadingService } from 'src/app/core/service/loading.service';
import { AlertService, TypeSnackMessage } from 'src/app/core/service/alert.service';
import { UtilError } from 'src/app/core/util/utilerror';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CadastroFuncionarioComponent implements OnInit {

  pessoa;
  cidadeControl = new FormControl();
  formGroup: FormGroup;

  breadCrumb = [
    { label: 'Listagem', rota: 'view/funcionario' }
  ];

  sexoOptions: any[] = [
    { label: 'Feminino', value: 'F' },
    { label: 'Masculino', value: 'M' },
    { label: 'Outros', value: 'O' }
  ];

  cidades;
  cidadeSelecionada;

  constructor(
    private formBuilder: FormBuilder,
    private loadingService: LoadingService,
    private alertService: AlertService,
    private pessoaService: PessoaService,
    private cidadeService: CidadeService,
    private activatedRoute: ActivatedRoute,
    private funcionarioService: FuncionarioService) {

    this.criarFormulario();
    this.adicionarEscutaCidade();
  }

  private criarFormulario(): void {
    this.formGroup = this.formBuilder.group({
      id: [],
      matricula: [null, Validators.required],
      dataAdmissao: [null, Validators.required],
      pessoa: this.formBuilder.group({
        id: [],
        cpf: [null, Validators.required],
        nome: [null, Validators.required],
        dataNascimento: [null, Validators.required],
        sexo: [null, Validators.required],
        logradouro: [null, Validators.required],
        bairro: [null, Validators.required],
        complemento: [null, Validators.required],
        cep: [],
        cidade: [null, Validators.required]
      })
    });

    this.formGroup.get(`id`).disable();
  }

  private adicionarEscutaCidade(): void {
    this.cidades = this.formGroup.get('pessoa').get('cidade').valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(e => this.cidadeService.obterPeloTermo(e))
      );
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(filter(res => res.id))
      .subscribe(res => this.carregouIdParaEdicao(res.id));
  }

  carregouIdParaEdicao(id: any): void {
    this.funcionarioService.obterPeloId(id)
      .subscribe(result => {
        this.formGroup.patchValue(result);
      });
  }

  displayFnCidade(cidade): string {
    return cidade && cidade.nomeCidade ? `${cidade.nomeCidade} - ${cidade.uf}` : '';
  }

  onCidadeSelected(event): void {
    this.cidadeSelecionada = event?.option?.value;
  }

  procurarPessoaPeloCPF(event): void {
    if (this.formGroup.get('pessoa').get('cpf') && this.formGroup.get('pessoa').get('cpf').value) {
      this.loadingService.addLoading();
      this.pessoaService.obterPessoaPeloCpf(this.formGroup.get('pessoa').get('cpf').value)
        .pipe(finalize(() => this.loadingService.removerLoading()))
        .subscribe(result => {
          this.pessoa = result;

          this.formGroup.get('pessoa').patchValue(result);
        });
    }
  }

  salvarFuncionario(): void {

    const body: any = this.formGroup.getRawValue();

    this.loadingService.addLoading();
    this.funcionarioService.salvarFuncionario(body)
      .pipe(finalize(() => this.loadingService.removerLoading()))
      .subscribe(
        result => this.salvarFuncionarioResult(result),
        error => UtilError.dispatchMessageError(error, this.alertService)
      );
  }

  private salvarFuncionarioResult(result: any): void {
    this.alertService.showSnackBarMessage({
      message: 'Registro salvo com sucesso', type: TypeSnackMessage.SUCCESS
    });

    this.formGroup.patchValue({ id: result.id });
    this.pessoa = result.pessoa;
  }


}
