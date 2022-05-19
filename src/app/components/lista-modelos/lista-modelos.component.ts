import { Observable } from 'rxjs';
import { ModeloService } from 'src/app/services/modelo.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Modelo } from 'src/app/interfaces/modelo';

@Component({
    selector: 'app-lista-modelos',
    templateUrl: './lista-modelos.component.html',
    styleUrls: ['./lista-modelos.component.scss'],
})
export class ListaModelosComponent implements OnInit {

    modelos$!: Observable<Modelo[]>;

    constructor(
        private _router: Router,
        private _modeloService: ModeloService
    ) {}

    ngOnInit(): void {
        this.modelos$ = this._modeloService.listar();
    }

    editar(id: number | undefined) {
        this._router.navigate([`/modelos/editar-modelo/${id}`]);
    }
}
