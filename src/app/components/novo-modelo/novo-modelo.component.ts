import { Router } from '@angular/router';
import { Modelo } from './../../interfaces/modelo';
import { ModeloService } from 'src/app/services/modelo.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModeloComponent } from '../modelo/modelo.component';

@Component({
    selector: 'app-novo-modelo',
    templateUrl: './novo-modelo.component.html',
    styleUrls: ['./novo-modelo.component.scss'],
})
export class NovoModeloComponent implements OnInit {
    @ViewChild(ModeloComponent) child!: ModeloComponent;

    constructor(
        private _modeloService: ModeloService,
        private _router: Router
    ) {}

    ngOnInit(): void {}

    solicitarDados() {
        this.child.emitirDados();
    }

    registrarModelo(form: any) {
        let modelo = this.ajustarTipagem(form);
        this._modeloService.criar(modelo).subscribe();
        this.retornar();
    }

    private ajustarTipagem(modelo: any): Modelo {
        modelo.estampa = !!parseInt(modelo.estampa);
        modelo.bordado = !!parseInt(modelo.bordado);
        modelo.colecao = parseInt(modelo.colecao);

        return modelo;
    }

    private retornar() {
        setTimeout(() => {
            this._router.navigate(['/modelos']);
        }, 500);
    }
}
