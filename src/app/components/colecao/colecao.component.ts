import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Colecao } from 'src/app/interfaces/colecao';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-colecao',
    templateUrl: './colecao.component.html',
    styleUrls: ['./colecao.component.scss'],
})
export class ColecaoComponent implements OnInit {
    invalid!: boolean;
    @Output() novaColecao = new EventEmitter();
    @Input() dados!: Observable<Colecao>;

    form = new FormGroup({
        nome: new FormControl('', Validators.required),
        responsavel: new FormControl('', Validators.required),
        estacao: new FormControl('', Validators.required),
        marca: new FormControl('', Validators.required),
        orcamento: new FormControl('', Validators.required),
        ano: new FormControl('', Validators.required),
    });

    img = '../../../assets/image 1.png';

    constructor() {}

    ngOnInit(): void {
        this.montarEdicao();
    }

    emitirDados() {
        if (this.form.invalid) {
            this.invalid = true;
            return;
        }
        this.novaColecao.emit(this.form.value);
        this.invalid = false;
    }

    montarEdicao() {
        if (!this.dados) return;
        this.dados.subscribe((res) => {
            this.form.patchValue(res);
        });
    }
}
