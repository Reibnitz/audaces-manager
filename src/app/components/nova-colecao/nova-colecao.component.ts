import { Router } from '@angular/router';
import { ColecaoService } from './../../services/colecao.service';
import { Colecao } from './../../interfaces/colecao';
import { ColecaoComponent } from './../colecao/colecao.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-nova-colecao',
    templateUrl: './nova-colecao.component.html',
    styleUrls: ['./nova-colecao.component.scss'],
})
export class NovaColecaoComponent implements OnInit {
    @ViewChild(ColecaoComponent) child!: ColecaoComponent;

    constructor(
        private _colecaoService: ColecaoService,
        private _router: Router
    ) {}

    ngOnInit(): void {}

    solicitarDados() {
        this.child.emitirDados();
    }

    registrarColecao(colecao: Colecao) {
        this._colecaoService.criar(colecao).subscribe();
        this.retornar();
    }

    private retornar() {
        setTimeout(() => {
            this._router.navigate(['/colecoes']);
        }, 500);
    }
}
