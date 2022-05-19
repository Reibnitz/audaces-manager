import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    logo: string = '../../../assets/AudacesLogo.svg';

    constructor() {}

    ngOnInit(): void {}
}
