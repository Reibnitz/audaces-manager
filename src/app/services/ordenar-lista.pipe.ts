import { Colecao } from './../interfaces/colecao';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ordenarLista',
})
export class OrdenarListaPipe implements PipeTransform {
    transform(value: Colecao[] | null): Colecao[] {
        let teste: Colecao[] = [];
        if (!value) return teste;
        return value.sort((a, b) => b.orcamento - a.orcamento)

    }
}
