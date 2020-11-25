import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view.component';


const routes: Routes = [
  {
    path: '', component: ViewComponent,
    children: [
      {
        path: 'funcionario',
        loadChildren: () => import('./funcionario/funcionario.module').then(m => m.FuncionarioModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
      },
      {
        path: ``, redirectTo: 'home', pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
