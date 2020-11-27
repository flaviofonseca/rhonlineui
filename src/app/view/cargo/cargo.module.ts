import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargoRoutingModule } from './cargo-routing.module';
import { ListagemCargoComponent } from './listagem-cargo/listagem-cargo.component';
import { CoreModule } from 'src/app/core/core.module';
import { CadastroCargoComponent } from './cadastro-cargo/cadastro-cargo.component';


@NgModule({
  declarations: [
    ListagemCargoComponent,
    CadastroCargoComponent],
  imports: [
    CommonModule,
    CoreModule,
    CargoRoutingModule
  ],
  exports: [ListagemCargoComponent, CadastroCargoComponent]
})
export class CargoModule { }
