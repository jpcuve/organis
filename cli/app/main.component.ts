import {Component, OnInit} from '@angular/core';
import {Person, RemoteService} from "./remote.service";

@Component({
    template: `
    <h2>Main</h2>
    <ul>
        <li *ngFor="let p of persons">{{p.name}}</li>
    </ul>

    `
})
export class MainComponent implements OnInit {
    persons: Person[] = [];

    constructor(private remoteService: RemoteService){
        console.log('Main component starting now');
    }

    ngOnInit(): void {
        this.remoteService.getPersons().subscribe(ps => this.persons = ps);
    }
}
