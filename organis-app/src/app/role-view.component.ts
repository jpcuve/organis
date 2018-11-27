import {Component, OnInit} from '@angular/core';
import {RemoteService} from "./remote.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    template: `<span>role: {{activatedRoute.snapshot.params['id']}}</span>`
})
export class RoleViewComponent implements OnInit {

    constructor(
        public activatedRoute: ActivatedRoute,
        private remoteService: RemoteService
    ){
        console.log('Role view component starting now');
    }

    ngOnInit(): void {
/*
        this.activatedRoute.params
            .switchMap((params: Params) => {
                console.log('params:', params['id']);
                return Observable.of('lala');
            })
            .subscribe((s: string) => {
                console.log('string:', s);
            });
*/
    }
}
