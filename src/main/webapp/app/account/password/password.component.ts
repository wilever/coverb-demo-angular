import { Component, OnInit } from '@angular/core';

<<<<<<< HEAD
import { Principal } from 'app/core';
=======
import { AccountService } from 'app/core';
>>>>>>> jhipster_upgrade
import { PasswordService } from './password.service';

@Component({
    selector: 'jhi-password',
    templateUrl: './password.component.html'
})
export class PasswordComponent implements OnInit {
    doNotMatch: string;
    error: string;
    success: string;
    account: any;
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;

<<<<<<< HEAD
    constructor(private passwordService: PasswordService, private principal: Principal) {}

    ngOnInit() {
        this.principal.identity().then(account => {
=======
    constructor(private passwordService: PasswordService, private accountService: AccountService) {}

    ngOnInit() {
        this.accountService.identity().then(account => {
>>>>>>> jhipster_upgrade
            this.account = account;
        });
    }

    changePassword() {
        if (this.newPassword !== this.confirmPassword) {
            this.error = null;
            this.success = null;
            this.doNotMatch = 'ERROR';
        } else {
            this.doNotMatch = null;
            this.passwordService.save(this.newPassword, this.currentPassword).subscribe(
                () => {
                    this.error = null;
                    this.success = 'OK';
                },
                () => {
                    this.success = null;
                    this.error = 'ERROR';
                }
            );
        }
    }
}
