import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orcamento',
})
export class OrcamentoPipe implements PipeTransform {
    transform(valor: number): string {
        let regex = /(\d+)(\d{3})/;
        // return `R$ ${valor.toLocaleString('pt-BR')}`
        return `R$ ${valor.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    }
}
