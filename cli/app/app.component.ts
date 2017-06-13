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
<span *zap="'test'">Coucou</span>
<router-outlet></router-outlet>
`
})
export class AppComponent {
    constructor(
    ){
    }
}
