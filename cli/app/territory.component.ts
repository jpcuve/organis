import {Component, Input} from "@angular/core";
import {NamedNodeComponent} from "./named-node.component";

@Component({
    template: '<span>{{node.name}}</span>'
})
export class TerritoryComponent extends NamedNodeComponent {
}
