import {Component, Input, OnInit} from "@angular/core";
import {TreeNode} from "./remote.service";

@Component({
    selector: 'tree',
    template: `
<ul>
    <li *ngFor="let c of children()">
        <span>{{c.name}}</span>
        <tree *ngIf="c.childCount > 0" [value]="c"></tree>
    </li>
</ul>
`
})
export class TreeComponent implements OnInit {
    @Input()
    value: TreeNode;

    constructor(
    ){
        console.log('Tree component starting now');
    }

    chidren(): TreeNode[]{
        return [];
    }

    ngOnInit(): void {

    }
}
