import {Component} from "@angular/core";

import {NamedNodeComponent} from "./named-node.component";
import {Role} from "./domain";

@Component({
    template: `<span><a [routerLink]="['/roles', role.id]">{{role.name}}</a></span>`
})
export class RoleComponent extends NamedNodeComponent {
    get role(): Role {
        return <Role> this.node;
    }
}
