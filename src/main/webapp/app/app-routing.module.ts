import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { errorRoute, navbarRoute } from './layouts';
import { DEBUG_INFO_ENABLED } from 'app/app.constants';

const LAYOUT_ROUTES = [navbarRoute, ...errorRoute];

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
<<<<<<< HEAD
                ...LAYOUT_ROUTES,
                {
                    path: 'admin',
                    loadChildren: './admin/admin.module#JhipsterAdminModule'
                }
=======
                {
                    path: 'admin',
                    loadChildren: './admin/admin.module#JhipsterAdminModule'
                },
                ...LAYOUT_ROUTES
>>>>>>> jhipster_upgrade
            ],
            { useHash: true, enableTracing: DEBUG_INFO_ENABLED }
        )
    ],
    exports: [RouterModule]
})
export class JhipsterAppRoutingModule {}
