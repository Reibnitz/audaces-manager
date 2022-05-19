import { Router } from '@angular/router';
import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
    logo = '../../../assets/Manager.png';
    constructor(private _storage: StorageService, private _router: Router) {}

    ngOnInit(): void {}

    public logout() {
        this._storage.delete();
        this._router.navigate(['/login']);
    }
}
