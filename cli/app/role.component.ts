import {Component, OnInit} from '@angular/core';
import {Domain, Person, Product, RemoteService, Role, Territory} from "./remote.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    template: '<span>role: {{activatedRoute.snapshot.params.id}}</span>'
})
export class RoleComponent implements OnInit {

    constructor(
        private activatedRoute: ActivatedRoute,
        private remoteService: RemoteService
    ){
        console.log('Role component starting now');
    }

    ngOnInit(): void {
    }
}
