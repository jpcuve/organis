import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";
import {NamedNode} from "./remote.service";

@Directive({
    selector: '[zap]'
})
export class Zap {
    private context: ZapContext = new ZapContext();

    constructor(private viewContainer: ViewContainerRef, private template: TemplateRef<ZapContext>){
    }

    @Input()
    set zap(topNode: string){
        this.context.$implicit = this.context.node = topNode;
        this.updateView();
    }

    private updateView(): void {
        this.viewContainer.clear();
        if (this.context.$implicit){ // a top node is set
            this.viewContainer.createEmbeddedView(this.template, this.context);
        }
    }
}

export class ZapContext {
    $implicit: string = null;
    node: string = null;
}