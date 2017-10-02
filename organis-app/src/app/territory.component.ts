import {Component, Input} from "@angular/core";
import {NamedNodeComponent} from "./named-node.component";
import {Territory} from "./domain";

@Component({
    template: `<span><a [routerLink]="['/territories', territory.id]">{{territory.name}}</a></span>`
})
export class TerritoryComponent extends NamedNodeComponent {
    get territory(): Territory {
        return <Territory> this.node;
    }
}
