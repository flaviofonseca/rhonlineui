import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroCargoComponent } from './cadastro-cargo/cadastro-cargo.component';
import { ListagemCargoComponent } from './listagem-cargo/listagem-cargo.component';

const routes: Routes = [
  {
    path: '', component: ListagemCargoComponent
  },
  {
    path: 'cadastro', component: CadastroCargoComponent
  },
  {
    path: 'cadastro/:id', component: CadastroCargoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargoRoutingModule { }
