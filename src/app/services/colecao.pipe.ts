import { ColecaoService } from './colecao.service';
import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';

@Pipe({
    name: 'colecao',
})
export class ColecaoPipe implements PipeTransform {
    constructor(private _colecaoService: ColecaoService) {}

    transform(id: number): Observable<string> {
        return this._colecaoService.buscarPorId(id).pipe(map(res => res.nome))
    }
}
