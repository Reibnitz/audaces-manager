import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.scss']
})
export class RecuperarSenhaComponent implements OnInit {
    form!: FormGroup;
    invalid!: boolean;
    arrow: string = '../../../assets/Arrow - Left.svg'

    constructor(private _fb: FormBuilder) {}

    ngOnInit(): void {
        this.form = this._fb.group({
            username: [null, [Validators.required, Validators.email]]
        });
    }

    public verificar() {
        if (this.form.invalid) {
            this.invalid = true;
            return;
        }
    }
}
