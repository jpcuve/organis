import {
    AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, Input, OnInit, Type,
    ViewChild
} from "@angular/core";
import {NamedNode} from "./remote.service";
import {AnchorDirective} from "./anchor.directive";
import {NamedNodeComponent} from "./named-node.component";

@Component({
    selector: 'tree',
    template: `
<ul>
    <ng-template anchor></ng-template>
    <li *ngFor="let c of node.children">
        <tree [node]="c" [node-component]="nodeComponent"></tree>
    </li>
</ul>
`
})
export class TreeComponent implements OnInit, AfterViewInit {
    @Input()
    node: NamedNode;
    @ViewChild(AnchorDirective)
    anchor: AnchorDirective;
    @Input("node-component")
    nodeComponent: Type<NamedNodeComponent>;


    constructor(private componentFactoryResolver: ComponentFactoryResolver){
        console.log('Tree component starting now');
    }

    chidren(): NamedNode[]{
        return [];
    }

    ngOnInit(): void {
        this.loadComponent();
    }


    ngAfterViewInit(): void {
    }

    loadComponent(): void {
        let componentFactory: ComponentFactory<NamedNodeComponent> = this.componentFactoryResolver.resolveComponentFactory(this.nodeComponent);
        let viewContainer = this.anchor.viewContainer;
        viewContainer.clear();
        let componentRef: ComponentRef<NamedNodeComponent> = viewContainer.createComponent(componentFactory);
        let component: NamedNodeComponent = componentRef.instance;
        component.node = this.node;

    }

}
