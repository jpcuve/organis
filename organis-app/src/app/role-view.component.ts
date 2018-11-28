import {Component, OnInit} from '@angular/core';
import {RemoteService} from "./remote.service";
import {ActivatedRoute} from "@angular/router";

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
      console.log('Role id:', this.activatedRoute.snapshot.paramMap.get('id'));
    }
}
