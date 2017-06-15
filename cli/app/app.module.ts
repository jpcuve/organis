import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule, JsonpModule} from "@angular/http";

import { AppComponent }  from './app.component';
import { MainComponent }  from './main.component';
import {RemoteService} from "./remote.service";
import {RoleComponent} from "./role.component";
import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";
import {IntervalObservable} from "rxjs/observable/IntervalObservable";
import { Subject} from "rxjs/Subject";
import {FormsModule} from "@angular/forms";
import {ManagerFormComponent} from "./manager-form.component";
import {TreeComponent} from "./tree.component";
import {Zap} from "./zap.directive";
import {Pair} from "./pair.directive";

const routes: Routes = [
    { path: 'main', component: MainComponent },
    { path: 'domains', component: MainComponent },
    { path: 'territories', component: MainComponent },
    { path: 'roles/:id', component: RoleComponent },
    { path: '**', component: MainComponent }
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes), HttpModule, JsonpModule, FormsModule],
    declarations: [AppComponent,MainComponent, RoleComponent, TreeComponent, ManagerFormComponent, Zap, Pair],
    providers: [RemoteService],
    bootstrap: [AppComponent]
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
        let observable2 = IntervalObservable.create(500);
        let subscription2 = observable2.subscribe(() => console.log("timer top"));
        setTimeout(() => subscription2.unsubscribe(), 10000);
        console.log('terminated');

    }
}
