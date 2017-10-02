import {Component, OnInit} from '@angular/core';
import {RemoteService} from "./remote.service";
import {ActivatedRoute, Params} from "@angular/router";

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import {Observable} from "rxjs/Observable";

@Component({
    template: `<span>territory: {{activatedRoute.snapshot.params['id']}}</span>`
})
export class TerritoryViewComponent implements OnInit {

    constructor(
        private activatedRoute: ActivatedRoute,
        private remoteService: RemoteService
    ){
        console.log('Territory view component starting now');
    }

    ngOnInit(): void {
        this.activatedRoute.params
            .switchMap((params: Params) => {
                console.log('params:', params['id']);
                return Observable.of('lala');
            })
            .subscribe((s: string) => {
                console.log('string:', s);
            });
    }
}
