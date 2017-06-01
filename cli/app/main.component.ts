import {Component, OnInit} from '@angular/core';
import {Person, RemoteService, Role, Territory} from "./remote.service";

@Component({
    template: `
<h2>Main</h2>
<ul>
    <li *ngFor="let p of persons">{{p.name}}</li>
</ul>
<table>
    <tr>
        <th>Roles</th>
        <th>Territories</th>
    </tr>
    <tr>
        <td valign="top">
            <pre>
                <div *ngFor="let r of roles">{{r.id}}: {{r.name}}</div>
            </pre>
        </td>
        <td valign="top">
            <pre>
                <div *ngFor="let t of territories">{{t.id}}: {{t.name}}</div>
            </pre>
        </td>
    </tr>
</table>
`
})
export class MainComponent implements OnInit {
    persons: Person[] = [];
    roles: Role[] = [];
    territories: Territory[] = [];

    constructor(private remoteService: RemoteService){
        console.log('Main component starting now');
    }

    ngOnInit(): void {
        this.remoteService.getPersons().subscribe(ps => this.persons = ps);
        this.remoteService.getRoles().subscribe(rs => this.roles = rs);
        this.remoteService.getTerritories().subscribe(ts => this.territories = ts);
    }
}
