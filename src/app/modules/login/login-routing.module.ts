import { RecuperarSenhaComponent } from '../../components/recuperar-senha/recuperar-senha.component';
import { SigninComponent } from '../../components/signin/signin.component';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: LoginComponent, children: [
        { path: '', component: SigninComponent},
        { path: 'recuperar-senha', component: RecuperarSenhaComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
