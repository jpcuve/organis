import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
    selector: '[blam]'
})
export class Blam {
    private context: BlamContext = new BlamContext();

    constructor(private viewContainer: ViewContainerRef, private template: TemplateRef<BlamContext>){
    }

    @Input()
    set zap(topNode: string){ // implicit if the setter same name as the class
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
        if (this.context.$implicit){ // if there is a string, the template is added to the view count times
            for (let i = 0; i < this.context.count; i++){
                this.viewContainer.createEmbeddedView(this.template, this.context);
            }
        }
    }
}

export class BlamContext {
    $implicit: string = null;
    node: string = null;
    count: number = 3;
}