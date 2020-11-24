import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroEstacaoPontoComponent } from './cadastro-estacao-ponto/cadastro-estacao-ponto.component';

const routes: Routes = [
  { path: '', component: CadastroEstacaoPontoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstacaoPontoRoutingModule { }
