import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    constructor() {}

    public set(user: string) {
        localStorage.setItem('user', user);
    }

    public get() {
        return localStorage.getItem('user');
    }

    public delete() {
        localStorage.removeItem('user');
    }
}
