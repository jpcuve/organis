import {Component, Input, OnInit} from "@angular/core";
import {NamedNode} from "./remote.service";

@Component({
    selector: 'tree',
    template: `
<ul>
    <li *ngFor="let c of node.children">
        <span>{{c.name}}</span>
        <tree [node]="c"></tree>
    </li>
</ul>
`
})
export class TreeComponent implements OnInit {
    @Input()
    node: NamedNode;

    constructor(
    ){
        console.log('Tree component starting now');
    }

    chidren(): NamedNode[]{
        return [];
    }

    ngOnInit(): void {

    }
}
