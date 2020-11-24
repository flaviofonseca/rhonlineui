import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CrudModule } from 'src/app/crud/crud.module';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { ListagemFuncionarioComponent } from './listagem-funcionario/listagem-funcionario.component';


@NgModule({
  declarations: [CadastroFuncionarioComponent, ListagemFuncionarioComponent],
  imports: [
    CommonModule,
    CrudModule,
    FuncionarioRoutingModule
  ]
})
export class FuncionarioModule { }
