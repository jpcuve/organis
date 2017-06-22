import {Component, Input} from "@angular/core";
import {NamedNodeComponent} from "./named-node.component";
import {Territory} from "./remote.service";

@Component({
    template: '<span>{{territory.name}}</span>'
})
export class TerritoryComponent extends NamedNodeComponent {
    get territory(): Territory {
        return <Territory> this.node;
    }
}
