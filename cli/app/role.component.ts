import {Component} from "@angular/core";

import {NamedNodeComponent} from "./named-node.component";

@Component({
    template: '<span>role: {{node.name}}</span>'
})
export class RoleComponent extends NamedNodeComponent {
}
