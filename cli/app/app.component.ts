import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
<span>Application</span>
<nav>
    <a [routerLink]="['main', {test: 'me'}]" routerLinkActive="active">Main</a>
    <a routerLink="domains" routerLinkActive="active">Domains</a>
    <a routerLink="territories" routerLinkActive="active">Territories</a>
</nav>
<span *zap="'test'; count: 19">Coucou</span>
<div *pair="9; one blockOne two blockTwo"></div>
<ng-template #blockOne>
    <div>Block one</div>
</ng-template>
<ng-template #blockTwo>
    <div>Block two</div>
</ng-template>
<router-outlet></router-outlet>
`
})
export class AppComponent {
    constructor(
    ){
    }
}
