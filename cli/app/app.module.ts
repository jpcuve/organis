import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule, JsonpModule} from "@angular/http";

import { AppComponent }  from './app.component';
import { MainComponent }  from './main.component';

const routes: Routes = [
    { path: 'main', component: MainComponent },
    { path: 'domains', component: MainComponent },
    { path: 'territories', component: MainComponent },
    { path: '**', component: MainComponent }
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes), HttpModule, JsonpModule],
    declarations: [AppComponent,MainComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
