import { ColecaoPipe } from './../../services/colecao.pipe';
import { EditarModeloComponent } from './../../components/editar-modelo/editar-modelo.component';
import { ModeloModule } from './../../components/modelo/modelo.module';
import { NovoModeloComponent } from './../../components/novo-modelo/novo-modelo.component';
import { ListaModelosComponent } from './../../components/lista-modelos/lista-modelos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelosRoutingModule } from './modelos-routing.module';
import { ModelosComponent } from './modelos.component';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ModelosComponent, ListaModelosComponent, NovoModeloComponent, EditarModeloComponent, ColecaoPipe],
    imports: [CommonModule, ModelosRoutingModule, MenuModule, ModeloModule, ReactiveFormsModule],
})
export class ModelosModule {}
