import {Component, OnInit, Type} from '@angular/core';
import {Domain, NamedNode, Person, Product, RemoteService, Role, Territory} from "./remote.service";
import {InnerComponent} from "./inner.component";
import {TerritoryComponent} from "./territory.component";
import {RoleComponent} from "./role.component";

@Component({
    templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
    persons: Person[] = [];
    domains: Domain[] = [];
    role: Role = {id: '', name:'top', splitDomain: '', children:[]};
    territory: Territory = {id: '', name:'top', children:[]};
    products: Product[] = [];
    innerComponent: Type<InnerComponent> = InnerComponent;
    territoryComponent: Type<TerritoryComponent> = TerritoryComponent;
    roleComponent: Type<RoleComponent> = RoleComponent;

    constructor(private remoteService: RemoteService){
        console.log('Main component starting now');
    }

    pack(nodeList: NamedNode[]): NamedNode {
        let top: NamedNode = null;
        var map: { [key: string]: NamedNode } = {};
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
    }
}
