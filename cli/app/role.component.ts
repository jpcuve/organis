import {Component, OnInit} from '@angular/core';
import {RemoteService} from "./remote.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Component({
    template: '<span>role: {{roleId}}</span>'
})
export class RoleComponent implements OnInit {
    roleId: string;

    constructor(
        public activatedRoute: ActivatedRoute,
        public remoteService: RemoteService
    ){
        console.log('Role component starting now');
    }

    ngOnInit(): void {
            this.activatedRoute.params
                .switchMap((params: Params) => {
                    console.log('params:', params['id']);
                    this.roleId = params['id'];
                    return Observable.of('lala');
                })
                .subscribe((s: string) => {
                    console.log('string:', s);
                });
    }
}
