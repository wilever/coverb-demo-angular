import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
<<<<<<< HEAD

/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
=======
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
>>>>>>> jhipster_upgrade
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterEntityModule {}
