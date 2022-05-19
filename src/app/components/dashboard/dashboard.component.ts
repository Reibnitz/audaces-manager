import { StorageService } from './../../services/storage.service';
import { ModeloService } from 'src/app/services/modelo.service';
import { ColecaoService } from './../../services/colecao.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Colecao } from 'src/app/interfaces/colecao';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    quantidadeColecoes!: number;
    quantidadeModelos!: number;
    orcamentoMedio!: number;
    colecoes$!: Observable<Colecao[]>;
    usuario!: string;

    constructor(
        private _colecaoService: ColecaoService,
        private _modeloService: ModeloService,
        private _storageService: StorageService
    ) {}

    ngOnInit(): void {
        this.colecoes$ = this._colecaoService.listar();
        this.colecoes$.subscribe((res) => {
            this.quantidadeColecoes = res.length;
            let total = 0;
            res.forEach(col => total += col.orcamento);
            this.orcamentoMedio = total / res.length;
        });

        this._modeloService.listar().subscribe((res) => {
            this.quantidadeModelos = res.length;
        });
        this.usuario = this._storageService.get() as string;
    }
}
