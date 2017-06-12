import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
<span>Application</span>
<div class="tree-box">
    <ul class="root">
        <span>top node</span>
        <li>
            <tree [node]="top"></tree>
        </li>
    </ul>
</div>
<nav>
    <a [routerLink]="['main', {test: 'me'}]" routerLinkActive="active">Main</a>
    <a routerLink="domains" routerLinkActive="active">Domains</a>
    <a routerLink="territories" routerLinkActive="active">Territories</a>
</nav>
<router-outlet></router-outlet>
`
})
export class AppComponent {
    top: any = {
        name: 'top',
        children: [
            {
                name: 'a',
                children: [
                    {
                        name: 'aa',
                        children: []
                    },
                    {
                        name: 'ab',
                        children: []
                    }
                ]
            },
            {
                name: 'b',
                children: []
            },
            {
                name: 'c',
                children: [
                    {
                        name: 'ca',
                        children: []
                    },
                    {
                        name: 'cb',
                        children: [
                            {
                                name: 'cba',
                                children: []
                            }
                        ]
                    },
                    {
                        name: 'cc',
                        children: []
                    },
                ]
            },
        ]
    };

    constructor(
    ){
    }
}
