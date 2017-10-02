import {Directive, ElementRef, Input, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
    selector: '[pair]'
})
export class Pair {
    private context: PairContext = new PairContext();
    one: TemplateRef<PairContext>;
    two: TemplateRef<PairContext>;

    constructor(private viewContainer: ViewContainerRef){
    }

    @Input()
    set pair(condition: any){
        this.context.condition = condition;

    }

    @Input()
    set pairOne(one: TemplateRef<PairContext>){
        this.one = one;
        this.updateView();
    }

    @Input()
    set pairTwo(two: TemplateRef<PairContext>){
        this.two = two;
        this.updateView();
    }

    private updateView(): void {
        if (this.one && this.two){
            this.viewContainer.clear();
            let root: any = this.viewContainer.element.nativeElement;
            root.appendChild();
            this.viewContainer.createEmbeddedView(this.one, this.context);
            this.viewContainer.createEmbeddedView(this.two, this.context);
        }
    }
}

export class PairContext {
    condition: any;
}