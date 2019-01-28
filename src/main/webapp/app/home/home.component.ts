import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

<<<<<<< HEAD
import { LoginModalService, Principal, Account } from 'app/core';
=======
import { LoginModalService, AccountService, Account } from 'app/core';
>>>>>>> jhipster_upgrade

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;

<<<<<<< HEAD
    constructor(private principal: Principal, private loginModalService: LoginModalService, private eventManager: JhiEventManager) {}

    ngOnInit() {
        this.principal.identity().then(account => {
=======
    constructor(
        private accountService: AccountService,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager
    ) {}

    ngOnInit() {
        this.accountService.identity().then((account: Account) => {
>>>>>>> jhipster_upgrade
            this.account = account;
        });
        this.registerAuthenticationSuccess();
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', message => {
<<<<<<< HEAD
            this.principal.identity().then(account => {
=======
            this.accountService.identity().then(account => {
>>>>>>> jhipster_upgrade
                this.account = account;
            });
        });
    }

    isAuthenticated() {
<<<<<<< HEAD
        return this.principal.isAuthenticated();
=======
        return this.accountService.isAuthenticated();
>>>>>>> jhipster_upgrade
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }
}
