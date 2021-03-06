import {Component, OnInit, Type} from '@angular/core';
import {RemoteService} from "./remote.service";
import {InnerComponent} from "./inner.component";
import {TerritoryComponent} from "./territory.component";
import {RoleComponent} from "./role.component";
import {MenuItem} from "primeng/primeng";
import {Domain, Person, Product, Role, Territory} from "./domain";
import {TreeNamedNode} from "./domain/TreeNamedNode";

@Component({
    templateUrl: './main-view.component.html'
})
export class MainViewComponent implements OnInit {
    persons: Person[] = [];
    domains: Domain[] = [];
    role: Role = {id: '', name:'All', splitDomain: '', children:[]};
    territory: Territory = {id: '', name:'World', children:[]};
    products: Product[] = [];
    innerComponent: Type<InnerComponent> = InnerComponent;
    territoryComponent: Type<TerritoryComponent> = TerritoryComponent;
    roleComponent: Type<RoleComponent> = RoleComponent;
    items: MenuItem[];

    constructor(private remoteService: RemoteService){
        console.log('Main component starting now');
    }

    pack(nodeList: TreeNamedNode[]): TreeNamedNode {
        let top: TreeNamedNode = null;
        let map: { [key: string]: TreeNamedNode } = {};
        nodeList.forEach(n => {
            map[n.id] = n;
            n.children = [];
            if (!n.parentId){
                top = n;
            }
        });
        nodeList.filter(n => n.parentId).forEach(n => map[n.parentId].children.push(n));
        return top;
    }

    ngOnInit(): void {
        this.remoteService.getPersons().subscribe(ps => this.persons = ps);
        this.remoteService.getDomains().subscribe(ds => this.domains = ds);
        this.remoteService.getRoles().subscribe(rs => this.role = <Role> this.pack(rs));
        this.remoteService.getTerritories().subscribe(ts => this.territory = this.pack(ts));
        this.remoteService.getProducts().subscribe(ps => this.products = ps);
        this.items = [];
        this.items.push({label:'Categories'});
        this.items.push({label:'Sports'});
        this.items.push({label:'Football'});
        this.items.push({label:'Countries'});
        this.items.push({label:'Spain'});
        this.items.push({label:'F.C. Barcelona'});
        this.items.push({label:'Squad'});
        this.items.push({label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'});    }
}
