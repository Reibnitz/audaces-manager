import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
    form!: FormGroup;
    invalid: boolean = false;

    constructor(private _fb: FormBuilder, private _storage: StorageService, private _router: Router) {}

    ngOnInit(): void {
        this.form = this._fb.group({
            username: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required, Validators.minLength(6)]],
        });
    }

    public verificar() {
        if (this.form.invalid) {
            this.invalid = true;
            return;
        }

        this._storage.set(this.form.value['username']);
        this._router.navigate(['/home'])
    }
}
