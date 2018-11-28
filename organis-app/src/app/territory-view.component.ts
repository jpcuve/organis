import {Component, OnInit} from '@angular/core';
import {RemoteService} from "./remote.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    template: `<span>territory: {{activatedRoute.snapshot.params['id']}}</span>`
})
export class TerritoryViewComponent implements OnInit {

    constructor(
        public activatedRoute: ActivatedRoute,
        private remoteService: RemoteService
    ){
        console.log('Territory view component starting now');
    }

    ngOnInit(): void {
      console.log('Territory id:', this.activatedRoute.snapshot.paramMap.get('id'));
    }
}
