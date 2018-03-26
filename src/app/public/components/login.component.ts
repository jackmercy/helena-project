import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CoreService } from '../../core/services/core.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginFormGroup: FormGroup;
    canDisableSignInButton: boolean;
    constructor(private _formBuilder: FormBuilder,
                private _coreService: CoreService,
                private _router: Router,
                public snackBar: MatSnackBar) { }

    ngOnInit() {
        this.loginFormGroup = this._formBuilder.group({
            user: ['', Validators.required],
            role: ['', Validators.required]
        });
        // this._coreService.getAllUser().subscribe( data => console.log(data));
        this.canDisableSignInButton = false;
    }

    onLogin() {
        this._coreService.login(this.username.value, this.role.value)
            .subscribe(
                data => {
                    this._router.navigate(['/home']);
                },
                error => {
                    console.log(error.error);
                    this.snackBar.open(error.error, 'Got it', {
                        duration: 2000,
                    });
                }
            );
    }

    get username() {
        return this.loginFormGroup.get('user');
    }

    get role() {
        return this.loginFormGroup.get('role');
    }

    getUserErrorMessage() {
        return this.username.hasError('required') ? 'Mandatory information' : '';
    }

    getRoleErrorMessage() {
        return this.role.hasError('required') ? 'Mandatory information' : '';
    }
}
