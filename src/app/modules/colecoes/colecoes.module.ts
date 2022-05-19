import { HomeModule } from './../home/home.module';
import { EditarColecaoComponent } from './../../components/editar-colecao/editar-colecao.component';
import { NovaColecaoComponent } from './../../components/nova-colecao/nova-colecao.component';
import { ColecaoModule } from './../../components/colecao/colecao.module';
import { MenuModule } from './../../components/menu/menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColecoesRoutingModule } from './colecoes-routing.module';
import { ColecoesComponent } from './colecoes.component';
import { ListaColecoesComponent } from 'src/app/components/lista-colecoes/lista-colecoes.component';

@NgModule({
    declarations: [ColecoesComponent, ListaColecoesComponent, NovaColecaoComponent, EditarColecaoComponent],
    imports: [CommonModule, ColecoesRoutingModule, MenuModule, ColecaoModule],
})
export class ColecoesModule {}
