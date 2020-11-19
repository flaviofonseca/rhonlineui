import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-listagem-funcionario',
  templateUrl: './listagem-funcionario.component.html',
  styleUrls: ['./listagem-funcionario.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListagemFuncionarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
