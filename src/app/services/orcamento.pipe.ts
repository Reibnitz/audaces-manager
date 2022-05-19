import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orcamento',
})
export class OrcamentoPipe implements PipeTransform {
    transform(valor: number): string {
        return Intl.NumberFormat('pt-br', {style: 'currency', currency:'BRL'}).format(valor);
    }
}
