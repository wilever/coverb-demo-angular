import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
<<<<<<< HEAD
import { Principal } from 'app/core/auth/principal.service';
=======
import { AccountService } from 'app/core/auth/account.service';
>>>>>>> jhipster_upgrade

/**
 * @whatItDoes Conditionally includes an HTML element if current user has any
 * of the authorities passed as the `expression`.
 *
 * @howToUse
 * ```
 *     <some-element *jhiHasAnyAuthority="'ROLE_ADMIN'">...</some-element>
 *
 *     <some-element *jhiHasAnyAuthority="['ROLE_ADMIN', 'ROLE_USER']">...</some-element>
 * ```
 */
@Directive({
    selector: '[jhiHasAnyAuthority]'
})
export class HasAnyAuthorityDirective {
    private authorities: string[];

<<<<<<< HEAD
    constructor(private principal: Principal, private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {}
=======
    constructor(
        private accountService: AccountService,
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef
    ) {}
>>>>>>> jhipster_upgrade

    @Input()
    set jhiHasAnyAuthority(value: string | string[]) {
        this.authorities = typeof value === 'string' ? [value] : value;
        this.updateView();
        // Get notified each time authentication state changes.
<<<<<<< HEAD
        this.principal.getAuthenticationState().subscribe(identity => this.updateView());
    }

    private updateView(): void {
        this.principal.hasAnyAuthority(this.authorities).then(result => {
            this.viewContainerRef.clear();
            if (result) {
                this.viewContainerRef.createEmbeddedView(this.templateRef);
            }
        });
=======
        this.accountService.getAuthenticationState().subscribe(identity => this.updateView());
    }

    private updateView(): void {
        const hasAnyAuthority = this.accountService.hasAnyAuthority(this.authorities);
        this.viewContainerRef.clear();
        if (hasAnyAuthority) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
>>>>>>> jhipster_upgrade
    }
}
