import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cadastro-estacao-ponto',
  templateUrl: './cadastro-estacao-ponto.component.html',
  styleUrls: ['./cadastro-estacao-ponto.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CadastroEstacaoPontoComponent implements OnInit {

  lat = -16.705137807371568; 
  lng= -49.263203740517675;
  zoom = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
