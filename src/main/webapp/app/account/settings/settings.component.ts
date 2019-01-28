import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';

<<<<<<< HEAD
import { Principal, AccountService, JhiLanguageHelper } from 'app/core';
=======
import { AccountService, JhiLanguageHelper } from 'app/core';
>>>>>>> jhipster_upgrade

@Component({
    selector: 'jhi-settings',
    templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {
    error: string;
    success: string;
    settingsAccount: any;
    languages: any[];

    constructor(
<<<<<<< HEAD
        private account: AccountService,
        private principal: Principal,
=======
        private accountService: AccountService,
>>>>>>> jhipster_upgrade
        private languageService: JhiLanguageService,
        private languageHelper: JhiLanguageHelper
    ) {}

    ngOnInit() {
<<<<<<< HEAD
        this.principal.identity().then(account => {
=======
        this.accountService.identity().then(account => {
>>>>>>> jhipster_upgrade
            this.settingsAccount = this.copyAccount(account);
        });
        this.languageHelper.getAll().then(languages => {
            this.languages = languages;
        });
    }

    save() {
<<<<<<< HEAD
        this.account.save(this.settingsAccount).subscribe(
            () => {
                this.error = null;
                this.success = 'OK';
                this.principal.identity(true).then(account => {
=======
        this.accountService.save(this.settingsAccount).subscribe(
            () => {
                this.error = null;
                this.success = 'OK';
                this.accountService.identity(true).then(account => {
>>>>>>> jhipster_upgrade
                    this.settingsAccount = this.copyAccount(account);
                });
                this.languageService.getCurrent().then(current => {
                    if (this.settingsAccount.langKey !== current) {
                        this.languageService.changeLanguage(this.settingsAccount.langKey);
                    }
                });
            },
            () => {
                this.success = null;
                this.error = 'ERROR';
            }
        );
    }

    copyAccount(account) {
        return {
            activated: account.activated,
            email: account.email,
            firstName: account.firstName,
            langKey: account.langKey,
            lastName: account.lastName,
            login: account.login,
            imageUrl: account.imageUrl
        };
    }
}
