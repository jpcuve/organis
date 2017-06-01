import {Component, OnInit} from '@angular/core';
import {Domain, Person, RemoteService, Role, Territory} from "./remote.service";

@Component({
    templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
    persons: Person[] = [];
    domains: Domain[] = [];
    roles: Role[] = [];
    territories: Territory[] = [];

    constructor(private remoteService: RemoteService){
        console.log('Main component starting now');
    }

    ngOnInit(): void {
        this.remoteService.getPersons().subscribe(ps => this.persons = ps);
        this.remoteService.getDomains().subscribe(ds => this.domains = ds);
        this.remoteService.getRoles().subscribe(rs => this.roles = rs);
        this.remoteService.getTerritories().subscribe(ts => this.territories = ts);
    }
}
