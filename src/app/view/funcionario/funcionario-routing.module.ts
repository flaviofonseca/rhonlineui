import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { ListagemFuncionarioComponent } from './listagem-funcionario/listagem-funcionario.component';

const routes: Routes = [
  { path: '', component: ListagemFuncionarioComponent },
  { path: 'cadastro', component: CadastroFuncionarioComponent },
  { path: 'cadastro/:id', component: CadastroFuncionarioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
