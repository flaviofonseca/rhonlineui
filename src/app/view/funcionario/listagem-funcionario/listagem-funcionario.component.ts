import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, finalize } from 'rxjs/operators';
import { ConfirmDialogService } from 'src/app/core/componentes/confirm-dialog/confirm-dialog.service';
import { AlertService } from 'src/app/core/service/alert.service';
import { LoadingService } from 'src/app/core/service/loading.service';
import { UtilError } from 'src/app/core/util/utilerror';
import { FuncionarioService } from 'src/app/service/funcionario.service';

@Component({
  selector: 'app-listagem-funcionario',
  templateUrl: './listagem-funcionario.component.html',
  styleUrls: ['./listagem-funcionario.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListagemFuncionarioComponent implements OnInit {

  data;
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'matricula', 'acao'];

  constructor(
    private router: Router,
    private cdf: ChangeDetectorRef,
    private confirmDialogService: ConfirmDialogService,
    private funcionarioService: FuncionarioService,
    private loadingService: LoadingService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.listarFuncionarios();
  }

  adicionarNovo(): void {
    this.router.navigate(['view/funcionario/cadastro']);
  }

  editar(element): void {
    this.router.navigate(['view/funcionario/cadastro', element.id]);
  }

  excluir(element): void {
    const config = {
      question: 'Deseja realmente excluir esse registro?',
      titulo: 'Exclusão de registro'
    };

    this.confirmDialogService.confirmDialog(config)
      .pipe(filter(e => e))
      .subscribe(() => this.deletarFuncionario(element));
  }

  deletarFuncionario(element): void {
    this.loadingService.addLoading();
    this.funcionarioService.excluirFuncionario(element.id)
      .pipe(finalize(() => this.loadingService.removerLoading()))
      .subscribe(e => {
        this.cdf.markForCheck();
        this.pesquisar();
      },
        error => UtilError.dispatchMessageError(error, this.alertService));
  }

  pesquisar(): void {
    this.listarFuncionarios();
  }

  listarFuncionarios(): void {
    this.loadingService.addLoading();
    this.data = this.funcionarioService.listarTodos()
      .pipe(
        finalize(() => this.loadingService.removerLoading())
      );
  }

}
