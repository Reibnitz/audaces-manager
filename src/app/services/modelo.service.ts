import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Modelo } from '../interfaces/modelo';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

    url:string = environment.API;

    constructor(private _http: HttpClient) {}

    listar(): Observable<Modelo[]> {
        return this._http.get<Modelo[]>(`${this.url}/modelos`);
    }

    criar(modelo: Modelo): Observable<Modelo> {
        return this._http.post<Modelo>(`${this.url}/modelos`, modelo);
    }

    editar(modelo: Modelo): Observable<Modelo> {
        return this._http.put<Modelo>(`${this.url}/modelos/${modelo.id}`, modelo);
    }

    remover(id: number): Observable<Modelo> {
        return this._http.delete<Modelo>(`${this.url}/modelos/${id}`);
    }

    obterPorId(id: number): Observable<Modelo> {
        return this._http.get<Modelo>(`${this.url}/modelos/${id}`);
    }
}
