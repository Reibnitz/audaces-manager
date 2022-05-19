import { EditarColecaoComponent } from './../../components/editar-colecao/editar-colecao.component';
import { ColecaoModule } from './../../components/colecao/colecao.module';
import { ListaColecoesComponent } from 'src/app/components/lista-colecoes/lista-colecoes.component';
import { NovaColecaoComponent } from './../../components/nova-colecao/nova-colecao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColecoesComponent } from './colecoes.component';

const routes: Routes = [
    {
        path: '',
        component: ColecoesComponent,
        children: [
            { path: '', component: ListaColecoesComponent},
            { path: 'nova-colecao', component: NovaColecaoComponent },
            { path: 'editar-colecao/:id', component:EditarColecaoComponent }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes), ColecaoModule],
    exports: [RouterModule],
})
export class ColecoesRoutingModule {}
