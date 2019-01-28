import { Injectable } from '@angular/core';

<<<<<<< HEAD
import { Principal } from '../auth/principal.service';
import { AuthServerProvider } from '../auth/auth-jwt.service';

@Injectable({ providedIn: 'root' })
export class LoginService {
    constructor(private principal: Principal, private authServerProvider: AuthServerProvider) {}
=======
import { AccountService } from 'app/core/auth/account.service';
import { AuthServerProvider } from 'app/core/auth/auth-jwt.service';

@Injectable({ providedIn: 'root' })
export class LoginService {
    constructor(private accountService: AccountService, private authServerProvider: AuthServerProvider) {}
>>>>>>> jhipster_upgrade

    login(credentials, callback?) {
        const cb = callback || function() {};

        return new Promise((resolve, reject) => {
            this.authServerProvider.login(credentials).subscribe(
                data => {
<<<<<<< HEAD
                    this.principal.identity(true).then(account => {
=======
                    this.accountService.identity(true).then(account => {
>>>>>>> jhipster_upgrade
                        resolve(data);
                    });
                    return cb();
                },
                err => {
                    this.logout();
                    reject(err);
                    return cb(err);
                }
            );
        });
    }

    loginWithToken(jwt, rememberMe) {
        return this.authServerProvider.loginWithToken(jwt, rememberMe);
    }

    logout() {
        this.authServerProvider.logout().subscribe();
<<<<<<< HEAD
        this.principal.authenticate(null);
=======
        this.accountService.authenticate(null);
>>>>>>> jhipster_upgrade
    }
}
