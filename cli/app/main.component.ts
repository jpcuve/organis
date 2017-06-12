import {Component, OnInit} from '@angular/core';
import {Domain, NamedNode, Person, Product, RemoteService, Role, Territory} from "./remote.service";

@Component({
    templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
    persons: Person[] = [];
    domains: Domain[] = [];
    roles: Role[] = [];
    territories: Territory[] = [];
    territory: Territory = {id: '', name:'top', children:[]};
    products: Product[] = [];

    constructor(private remoteService: RemoteService){
        console.log('Main component starting now');
    }

    pack(nodeList: NamedNode[]): NamedNode {
        let top: NamedNode = null;
        for (let n of nodeList){
            let t: boolean = true;
            for (let p of nodeList){
                if (n !== p){
                    if (n.parentId === p.id){
                        if (!p.children){
                            p.children = [];
                        }
                        p.children.push(n);
                        t = false;
                    }
                }
            }
            if (t){
                top = n;
            }
        }
        return top;
    }

    ngOnInit(): void {
        this.remoteService.getPersons().subscribe(ps => this.persons = ps);
        this.remoteService.getDomains().subscribe(ds => this.domains = ds);
        this.remoteService.getRoles().subscribe(rs => this.roles = rs);
        this.remoteService.getTerritories().subscribe(ts => {
            this.territories = ts;
            this.territory = this.pack(ts);
        });
        this.remoteService.getProducts().subscribe(ps => this.products = ps);
    }
}
