import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { RecuperarSenhaComponent } from './components/recuperar-senha/recuperar-senha.component';
import { HttpClientModule } from '@angular/common/http';
import { ColecaoPipe } from './services/colecao.pipe';

@NgModule({
    declarations: [AppComponent, SigninComponent, RecuperarSenhaComponent],
    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, RouterModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
