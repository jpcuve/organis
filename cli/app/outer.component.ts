/**
 * Created by jpc on 21-06-17.
 */
import {
    AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, Input, Type,
    ViewChild
} from "@angular/core";
import {AnchorDirective} from "./anchor.directive";
import {InnerComponent} from "./inner.component";

@Component({
    selector: 'outer',
    template: '<span>begin outer component<br/><ng-template anchor></ng-template><br/>end outer component</span>'
})
export class OuterComponent implements AfterViewInit {
    @ViewChild(AnchorDirective)
    anchor: AnchorDirective;
    @Input("inner")
    test: string;
    @Input("inner-component")
    innerComponent: Type<InnerComponent>;

    constructor(private componentFactoryResolver: ComponentFactoryResolver){
    }


    ngAfterViewInit(): void {
        this.loadComponent();
    }

    loadComponent(): void {
        console.log("inner:", this.test);
        let componentFactory: ComponentFactory<InnerComponent> = this.componentFactoryResolver.resolveComponentFactory(this.innerComponent);
        let viewContainer = this.anchor.viewContainer;
        viewContainer.clear();
        let componentRef: ComponentRef<InnerComponent> = viewContainer.createComponent(componentFactory);
        let component = componentRef.instance;


    }
}
