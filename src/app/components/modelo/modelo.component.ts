import { ColecaoService } from './../../services/colecao.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Modelo } from 'src/app/interfaces/modelo';
import { Observable } from 'rxjs';
import { Colecao } from 'src/app/interfaces/colecao';

@Component({
    selector: 'app-modelo',
    templateUrl: './modelo.component.html',
    styleUrls: ['./modelo.component.scss'],
})
export class ModeloComponent implements OnInit {

    @Output() novoModelo = new EventEmitter();
    @Input() dados$!: Observable<Modelo>;
    colecoes$!: Observable<Colecao[]>;
    invalid!: boolean;

    form = new FormGroup({
        nome: new FormControl('', Validators.required),
        responsavel: new FormControl('', Validators.required),
        tipo: new FormControl('Tipo do modelo', Validators.required),
        colecao: new FormControl('Selecionar coleção', Validators.required),
        bordado: new FormControl('', Validators.required),
        estampa: new FormControl('', Validators.required),
    });

    tipos = ['Bermuda', 'Biquini', 'Bolsa', 'Boné', 'Calça', 'Calçados', 'Camisa', 'Chapeu', 'Saia'];

    constructor(private _colecaoService: ColecaoService) {}

    ngOnInit(): void {
        this.montarEdicao();
        this.colecoes$ = this._colecaoService.listar();
    }

    emitirDados() {
        if (this.form.invalid) {
            this.invalid = true;
            return
        }
        this.novoModelo.emit(this.form.value);
        this.invalid = false;
    }

    private montarEdicao() {
        if (!this.dados$) return;
        this.dados$.subscribe(res => {
            let dados: any = res
            dados.estampa = res.estampa ? '1' : '0';
            dados.bordado = res.bordado ? '1' : '0';
            this.form.patchValue(dados);
        })
    }
}
