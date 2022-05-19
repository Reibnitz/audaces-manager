import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanLoad,
    Route,
    Router,
    RouterStateSnapshot,
    UrlSegment,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoginGuard implements CanActivate, CanLoad {
    constructor(private _storage: StorageService, private _router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        if (!this._storage.get()) {
            this._router.navigate(['/login']);
            return false;
        }
        return true;
    }
    canLoad(
        route: Route,
        segments: UrlSegment[]
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        if (!this._storage.get()) {
            this._router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
