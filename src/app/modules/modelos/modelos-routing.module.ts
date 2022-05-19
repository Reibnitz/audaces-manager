import { EditarModeloComponent } from './../../components/editar-modelo/editar-modelo.component';
import { NovoModeloComponent } from './../../components/novo-modelo/novo-modelo.component';
import { ListaModelosComponent } from './../../components/lista-modelos/lista-modelos.component';
import { ModelosComponent } from './modelos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ModelosComponent,
        children: [
            { path: '', component: ListaModelosComponent},
            { path: 'novo-modelo', component: NovoModeloComponent},
            { path: 'editar-modelo/:id', component: EditarModeloComponent},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelosRoutingModule { }
