import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
<nav>
    <a routerLink="home" routerLinkActive="active">Home</a>
    <a routerLink="domains" routerLinkActive="active">Domains</a>
    <a routerLink="products" routerLinkActive="active">Products</a>
</nav>
<router-outlet></router-outlet>
`
})
export class AppViewComponent {
    constructor(
    ){
    }
}
