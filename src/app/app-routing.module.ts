import { LoginGuard } from './services/login.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    {
        path: 'home',
        loadChildren: () =>
            import('./modules/home/home.module').then((m) => m.HomeModule),
        canActivate: [LoginGuard],
        canLoad: [LoginGuard],
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./modules/login/login.module').then((m) => m.LoginModule),
    },
    {
        path: 'colecoes',
        loadChildren: () =>
            import('./modules/colecoes/colecoes.module').then(
                (m) => m.ColecoesModule
            ),
        canActivate: [LoginGuard],
        canLoad: [LoginGuard],
    },
    {
        path: 'modelos',
        loadChildren: () =>
            import('./modules/modelos/modelos.module').then(
                (m) => m.ModelosModule
            ),
        canActivate: [LoginGuard],
        canLoad: [LoginGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
