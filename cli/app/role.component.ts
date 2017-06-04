import {Component, OnInit} from '@angular/core';
import {RemoteService} from "./remote.service";
import {ActivatedRoute, Params} from "@angular/router";

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import {Observable} from "rxjs/Observable";
import {Observer, PartialObserver} from "rxjs/Observer";

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
        console.log('Reactive programming test');
        let observable: Observable<string> = Observable.create((o: Observer<string>) => {
            o.next('a');
            o.next('b');
            o.next('c');
            setTimeout(() => {
                o.next('d');
                o.complete();
            }, 1000);
        });
        let subscription = observable.subscribe(
            (s: string) => console.log('received:', s),
            (error: any) => console.log('error:', error),
            () => console.log('subscription complete')
        );
        // subscription.unsubscribe();
        console.log('terminated');
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
