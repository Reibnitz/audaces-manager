import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { OrcamentoPipe } from 'src/app/services/orcamento.pipe';
import { OrdenarListaPipe } from 'src/app/services/ordenar-lista.pipe';

@NgModule({
    declarations: [HomeComponent, DashboardComponent, OrdenarListaPipe, OrcamentoPipe],
    imports: [CommonModule, HomeRoutingModule, MenuModule]
})
export class HomeModule {}
