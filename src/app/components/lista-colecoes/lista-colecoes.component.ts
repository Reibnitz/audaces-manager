import { Colecao } from './../../interfaces/colecao';
import { ColecaoService } from './../../services/colecao.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-lista-colecoes',
    templateUrl: './lista-colecoes.component.html',
    styleUrls: ['./lista-colecoes.component.scss'],
})
export class ListaColecoesComponent implements OnInit {

    colecoes$!: Observable<Colecao[]>;

    constructor(
        private _router: Router,
        private _colecaoService: ColecaoService
    ) {}

    ngOnInit(): void {
        this.colecoes$ = this._colecaoService.listar();
    }

    editar(id: number | undefined) {
        this._router.navigate([`/colecoes/editar-colecao/${id}`]);
    }
}
