import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {
    InputTextModule, ButtonModule, DataTableModule, DialogModule, PanelModule,
    AccordionModule
} from 'primeng/primeng';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        InputTextModule,
        ButtonModule,
        PanelModule,
        DataTableModule,
        DialogModule,
        AccordionModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
