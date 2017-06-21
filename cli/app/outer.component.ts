/**
 * Created by jpc on 21-06-17.
 */
import {AfterViewInit, Component, ComponentFactoryResolver, ViewChild} from "@angular/core";
import {AnchorDirective} from "./anchor.directive";
import {ManagerFormComponent} from "./manager-form.component";

@Component({
    selector: 'outer',
    template: '<span>The outer component<br/><ng-template anchor></ng-template></span>'
})
export class OuterComponent implements AfterViewInit {
    @ViewChild(AnchorDirective)
    anchor: AnchorDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver){
    }


    ngAfterViewInit(): void {
        this.loadComponent();
    }

    loadComponent(): void {
        let managerFormComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ManagerFormComponent);
        let viewContainer = this.anchor.viewContainer;
        viewContainer.clear();
        let managerFormComponentRef = viewContainer.createComponent(managerFormComponentFactory);
        let managerFormComponent = <ManagerFormComponent> managerFormComponentRef.instance;


    }
}
