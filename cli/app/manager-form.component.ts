import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Manager, RemoteService} from "./remote.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'manager-form',
    templateUrl: './manager-form.component.html',
})
export class ManagerFormComponent implements OnInit {
    sexes: string[] = ['male', 'female'];
    model: Manager = new Manager('Sexy Girl', this.sexes[1]);

    constructor(
        public activatedRoute: ActivatedRoute,
        public remoteService: RemoteService
    ){
        console.log('Manager form component starting now');
    }

    ngOnInit(): void {
    }

    get diagnostic(): string {
        return JSON.stringify(this.model);
    }

}
