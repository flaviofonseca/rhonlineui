import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, finalize } from 'rxjs/operators';
import { ConfirmDialogService } from 'src/app/core/componentes/confirm-dialog/confirm-dialog.service';
import { AlertService } from 'src/app/core/service/alert.service';
import { LoadingService } from 'src/app/core/service/loading.service';
import { UtilError } from 'src/app/core/util/utilerror';
import { CargoService } from 'src/app/service/cargo.service';

@Component({
  selector: 'app-listagem-cargo',
  templateUrl: './listagem-cargo.component.html',
  styleUrls: ['./listagem-cargo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListagemCargoComponent implements OnInit {

  data;
  displayedColumns: string[] = ['id', 'nomeCargo', 'acao'];

  constructor(
    private router: Router,
    private cdf: ChangeDetectorRef,
    private confirmDialogService: ConfirmDialogService,
    private cargoService: CargoService,
    private loadingService: LoadingService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.listarCargos();
  }

  adicionarNovo(): void {
    this.router.navigate(['view/cargo/cadastro']);
  }

  editar(element): void {
    this.router.navigate(['view/cargo/cadastro', element.id]);
  }

  excluir(element): void {
    const config = {
      question: 'Deseja realmente excluir esse registro?',
      titulo: 'Exclusão de registro'
    };

    this.confirmDialogService.confirmDialog(config)
      .pipe(filter(e => e))
      .subscribe(() => this.deletarCargo(element));
  }

  deletarCargo(element): void {
    this.loadingService.addLoading();
    this.cargoService.excluirCargo(element.id)
      .pipe(finalize(() => this.loadingService.removerLoading()))
      .subscribe(e => {
        this.cdf.markForCheck();
        this.pesquisar();
      },
      error => UtilError.dispatchMessageError(error, this.alertService));
  }

  pesquisar(): void {
    this.listarCargos();
  }

  listarCargos(): void {
    this.loadingService.addLoading();
    this.data = this.cargoService.listarTodos()
      .pipe(finalize(() => this.loadingService.removerLoading()));
  }

}
