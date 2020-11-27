import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { filter, finalize } from 'rxjs/operators';
import { AlertService, TypeSnackMessage } from 'src/app/core/service/alert.service';
import { LoadingService } from 'src/app/core/service/loading.service';
import { UtilError } from 'src/app/core/util/utilerror';
import { CargoService } from 'src/app/service/cargo.service';
import { CidadeService } from 'src/app/service/cidade.service';
import { PessoaService } from 'src/app/service/pessoa.service';

@Component({
  selector: 'app-cadastro-cargo',
  templateUrl: './cadastro-cargo.component.html',
  styleUrls: ['./cadastro-cargo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CadastroCargoComponent implements OnInit {

  cargo;
  formGroup: FormGroup;

  breadCrumb = [
    { label: 'Listagem', rota: 'view/cargo' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private loadingService: LoadingService,
    private alertService: AlertService,
    private activatedRoute: ActivatedRoute,
    private cargoService: CargoService

  ) { 
    this.criarFormulario();
  }

  private criarFormulario(): void {
    this.formGroup = this.formBuilder.group({
      id: [],
      nomeCargo: [null, Validators.required],
    });

    this.formGroup.get(`id`).disable();
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(filter(res => res.id))
      .subscribe(res => this.carregouIdParaEdicao(res.id));
  }

  carregouIdParaEdicao(id: any): void {
    this.cargoService.obterPeloId(id)
      .subscribe(result => {
        this.formGroup.patchValue(result);
      });
  }

  salvarCargo(): void {

    const body: any = this.formGroup.getRawValue();

    this.loadingService.addLoading();
    this.cargoService.salvarCargo(body)
      .pipe(finalize(() => this.loadingService.removerLoading()))
      .subscribe(
        result => this.salvarCargoResult(result),
        error => UtilError.dispatchMessageError(error, this.alertService)
      );
  }

  private salvarCargoResult(result: any): void {
    this.alertService.showSnackBarMessage({
      message: 'Registro salvo com sucesso', type: TypeSnackMessage.SUCCESS
    });

    this.formGroup.patchValue(result);
  }

}
