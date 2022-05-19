import { ModeloService } from 'src/app/services/modelo.service';
import { Modelo } from './../../interfaces/modelo';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloComponent } from '../modelo/modelo.component';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-editar-modelo',
    templateUrl: './editar-modelo.component.html',
    styleUrls: ['./editar-modelo.component.scss'],
})
export class EditarModeloComponent implements OnInit {
    @ViewChild(ModeloComponent) child!: ModeloComponent;
    dados$!: Observable<Modelo>;
    id!: number;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _modeloService: ModeloService,
        private _router: Router,
    ) {}

    ngOnInit(): void {
        this.id = parseInt(this._activatedRoute.snapshot.params['id']);
        this.dados$ = this._modeloService.obterPorId(this.id);
    }

    solicitarDados() {
        this.child.emitirDados();
    }

    atualizarModelo(form: any) {
        let modelo = this.ajustarTipagem(form);
        this._modeloService.editar(modelo).subscribe();
        this.retornar();
    }

    removerModelo() {
        this._modeloService.remover(this.id).subscribe();
        this.retornar();
    }

    private ajustarTipagem(modelo: any): Modelo {
        modelo.estampa = !!parseInt(modelo.estampa);
        modelo.bordado = !!parseInt(modelo.bordado);
        modelo.colecao = parseInt(modelo.colecao);
        modelo.id = this.id;

        return modelo;
    }

    private retornar() {
        setTimeout(() => {
            this._router.navigate(['/modelos']);
        }, 500);
    }
}
