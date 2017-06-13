import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";

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

    @Input()
    set zapCount(count: number){
        this.context.count = count;
        this.updateView();
    }

    private updateView(): void {
        this.viewContainer.clear();
        if (this.context.$implicit){ // if there is a string, the template is added to the view three times
            for (let i = 0; i < this.context.count; i++){
                this.viewContainer.createEmbeddedView(this.template, this.context);
            }
        }
    }
}

export class ZapContext {
    $implicit: string = null;
    node: string = null;
    count: number = 3;
}