import {Component, OnInit} from '@angular/core';
import {RemoteService, TerritoryViewModel} from "./remote.service";
import {ActivatedRoute, Params} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {Territory} from "./domain";

@Component({
    template: `<span>Territory: {{territory|json}}</span>`
})
export class TerritoryViewComponent implements OnInit {
  territory: Territory = null;

  constructor(
      public activatedRoute: ActivatedRoute,
      private remoteService: RemoteService
  ){
      console.log('Territory view component starting now');
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap((params: Params) => this.remoteService.getTerritoryViewModel(params['id'])))
      .subscribe((territoryViewModel: TerritoryViewModel) => this.territory = territoryViewModel.territory);
  }
}
