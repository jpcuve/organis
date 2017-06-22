import {Component} from "@angular/core";

import {NamedNodeComponent} from "./named-node.component";
import {Role} from "./remote.service";

@Component({
    template: '<span>{{role.name}}</span>'
})
export class RoleComponent extends NamedNodeComponent {
    get role(): Role {
        return <Role> this.node;
    }
}
