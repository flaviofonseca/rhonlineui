import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CoreModule } from 'src/app/core/core.module';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { ListagemFuncionarioComponent } from './listagem-funcionario/listagem-funcionario.component';

@NgModule({
  declarations: [CadastroFuncionarioComponent, ListagemFuncionarioComponent],
  imports: [
    CommonModule,
    CoreModule,
    MatTabsModule,
    FuncionarioRoutingModule
  ]
})
export class FuncionarioModule { }
