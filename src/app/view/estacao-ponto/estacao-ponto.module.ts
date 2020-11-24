import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CrudModule } from 'src/app/crud/crud.module';
import { CadastroEstacaoPontoComponent } from './cadastro-estacao-ponto/cadastro-estacao-ponto.component';
import { EstacaoPontoRoutingModule } from './estacao-ponto-routing.module';



@NgModule({
  declarations: [CadastroEstacaoPontoComponent],
  imports: [
    CommonModule,
    CrudModule,
    AgmCoreModule.forRoot({
      }),
    EstacaoPontoRoutingModule
  ],
  exports: [CadastroEstacaoPontoComponent]
})
export class EstacaoPontoModule { }
