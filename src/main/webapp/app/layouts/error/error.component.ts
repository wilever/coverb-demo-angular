import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'jhi-error',
    templateUrl: './error.component.html'
})
export class ErrorComponent implements OnInit {
    errorMessage: string;
    error403: boolean;
<<<<<<< HEAD
=======
    error404: boolean;
>>>>>>> jhipster_upgrade

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.data.subscribe(routeData => {
            if (routeData.error403) {
                this.error403 = routeData.error403;
            }
<<<<<<< HEAD
=======
            if (routeData.error404) {
                this.error404 = routeData.error404;
            }
>>>>>>> jhipster_upgrade
            if (routeData.errorMessage) {
                this.errorMessage = routeData.errorMessage;
            }
        });
    }
}
