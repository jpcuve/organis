import {Component, OnInit} from '@angular/core';
import {RemoteService, RoleViewModel} from "./remote.service";
import {ActivatedRoute, Params} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {Role} from "./domain";

@Component({
    template: `<span>Role: {{role|json}}</span>`
})
export class RoleViewComponent implements OnInit {
  role: Role;

  constructor(
      public activatedRoute: ActivatedRoute,
      private remoteService: RemoteService
  ){
      console.log('Role view component starting now');
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap((params: Params) => this.remoteService.getRoleViewModel(params['id'])))
      .subscribe((roleViewModel: RoleViewModel) => this.role = roleViewModel.role);
  }
}
