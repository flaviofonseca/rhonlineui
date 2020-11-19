import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CadastroFuncionarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
