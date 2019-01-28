import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable, throwError } from 'rxjs';

import { JhipsterTestModule } from '../../../test.module';
<<<<<<< HEAD
import { Principal, AccountService } from 'app/core';
=======
import { AccountService } from 'app/core';
>>>>>>> jhipster_upgrade
import { SettingsComponent } from 'app/account/settings/settings.component';

describe('Component Tests', () => {
    describe('SettingsComponent', () => {
        let comp: SettingsComponent;
        let fixture: ComponentFixture<SettingsComponent>;
        let mockAuth: any;
<<<<<<< HEAD
        let mockPrincipal: any;
=======
>>>>>>> jhipster_upgrade

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterTestModule],
                declarations: [SettingsComponent],
                providers: []
            })
                .overrideTemplate(SettingsComponent, '')
                .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SettingsComponent);
            comp = fixture.componentInstance;
            mockAuth = fixture.debugElement.injector.get(AccountService);
<<<<<<< HEAD
            mockPrincipal = fixture.debugElement.injector.get(Principal);
=======
>>>>>>> jhipster_upgrade
        });

        it('should send the current identity upon save', () => {
            // GIVEN
            const accountValues = {
                firstName: 'John',
                lastName: 'Doe',

                activated: true,
                email: 'john.doe@mail.com',
                langKey: 'en',
                login: 'john'
            };
<<<<<<< HEAD
            mockPrincipal.setResponse(accountValues);
=======
            mockAuth.setIdentityResponse(accountValues);
>>>>>>> jhipster_upgrade

            // WHEN
            comp.settingsAccount = accountValues;
            comp.save();

            // THEN
<<<<<<< HEAD
            expect(mockPrincipal.identitySpy).toHaveBeenCalled();
=======
            expect(mockAuth.identitySpy).toHaveBeenCalled();
>>>>>>> jhipster_upgrade
            expect(mockAuth.saveSpy).toHaveBeenCalledWith(accountValues);
            expect(comp.settingsAccount).toEqual(accountValues);
        });

        it('should notify of success upon successful save', () => {
            // GIVEN
            const accountValues = {
                firstName: 'John',
                lastName: 'Doe'
            };
<<<<<<< HEAD
            mockPrincipal.setResponse(accountValues);
=======
            mockAuth.setIdentityResponse(accountValues);
>>>>>>> jhipster_upgrade

            // WHEN
            comp.save();

            // THEN
            expect(comp.error).toBeNull();
            expect(comp.success).toBe('OK');
        });

        it('should notify of error upon failed save', () => {
            // GIVEN
            mockAuth.saveSpy.and.returnValue(throwError('ERROR'));

            // WHEN
            comp.save();

            // THEN
            expect(comp.error).toEqual('ERROR');
            expect(comp.success).toBeNull();
        });
    });
});
