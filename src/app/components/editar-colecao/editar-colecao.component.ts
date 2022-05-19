import { ColecaoService } from './../../services/colecao.service';
import { Colecao } from './../../interfaces/colecao';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColecaoComponent } from '../colecao/colecao.component';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-editar-colecao',
    templateUrl: './editar-colecao.component.html',
    styleUrls: ['./editar-colecao.component.scss'],
})
export class EditarColecaoComponent implements OnInit {
    @ViewChild(ColecaoComponent) child!: ColecaoComponent;
    dados!: Observable<Colecao>;
    id!: number;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _colecaoService: ColecaoService,
        private _router: Router
    ) {}

    ngOnInit(): void {
        this.id = parseInt(this._activatedRoute.snapshot.params['id']);
        this.dados = this._colecaoService.buscarPorId(this.id);
    }

    solicitarDados() {
        this.child.emitirDados();
    }

    atualizarColecao(colecao: Colecao) {
        colecao.id = this.id;
        this._colecaoService.editar(colecao).subscribe();
        this.retornar();
    }

    private retornar() {
        setTimeout(() => {
            this._router.navigate(['/colecoes']);
        }, 500);
    }
}
