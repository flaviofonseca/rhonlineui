import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemFuncionarioComponent } from './listagem-funcionario/listagem-funcionario.component';

const routes: Routes = [{ path: '', component: ListagemFuncionarioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
