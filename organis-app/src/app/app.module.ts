import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {interval, Observable, Observer, Subject} from "rxjs";
import {AppViewComponent} from "./app-view.component";
import {MainViewComponent} from "./main-view.component";
import {RoleViewComponent} from "./role-view.component";
import {TerritoryViewComponent} from "./territory-view.component";
import {RoleComponent} from "./role.component";
import {TreeComponent} from "./tree.component";
import {ManagerFormComponent} from "./manager-form.component";
import {OuterComponent} from "./outer.component";
import {InnerComponent} from "./inner.component";
import {TerritoryComponent} from "./territory.component";
import {Zap} from "./zap.directive";
import {Pair} from "./pair.directive";
import {AnchorDirective} from "./anchor.directive";
import {RemoteService} from "./remote.service";
import {PanelModule} from "primeng/panel";
import {AccordionModule, BreadcrumbModule, ButtonModule} from "primeng/primeng";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppViewComponent,
    MainViewComponent,
    RoleViewComponent,
    TerritoryViewComponent,
    RoleComponent,
    TreeComponent,
    ManagerFormComponent,
    OuterComponent,
    InnerComponent,
    TerritoryComponent,
    RoleComponent,
    Zap,
    Pair,
    AnchorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PanelModule,
    ButtonModule,
    AccordionModule,
    BreadcrumbModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [
    InnerComponent,
    TerritoryComponent,
    RoleComponent
  ],
  providers: [
    RemoteService
  ],
  bootstrap: [AppViewComponent]
})
export class AppModule {
  constructor(){
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
    let subject: Subject<string> = new Subject();
    subject.subscribe((s: string) => console.log('subject 1:', s));
    subject.subscribe((s: string) => console.log('subject 2:', s));
    subject.next('bonjour');
    subject.next('je');
    subject.next('m\'appelle');
    subject.next('jean-pierre');
    let observable2 = interval(500);
    let subscription2 = observable2.subscribe(() => console.log("timer top"));
    setTimeout(() => subscription2.unsubscribe(), 10000);
    console.log('terminated');

  }
}
