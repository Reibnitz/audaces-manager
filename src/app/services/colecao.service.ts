import { Colecao } from './../interfaces/colecao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ColecaoService {
    url:string = environment.API;

    constructor(private _http: HttpClient) {}

    listar(): Observable<Colecao[]> {
        return this._http.get<Colecao[]>(`${this.url}/colecoes`);
    }

    criar(colecao: Colecao): Observable<Colecao> {
        return this._http.post<Colecao>(`${this.url}/colecoes`, colecao);
    }

    editar(colecao: Colecao): Observable<Colecao> {
        return this._http.put<Colecao>(`${this.url}/colecoes/${colecao.id}`, colecao);
    }

    buscarPorId(id: number): Observable<Colecao> {
        return this._http.get<Colecao>(`${this.url}/colecoes/${id}`);
    }
}
