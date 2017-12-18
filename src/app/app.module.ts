import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShrinkingHeaderComponent } from './shrinking-header/shrinking-header.component';

import { MatIconModule, MatSidenavModule, MatToolbarModule, MatButtonModule } from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ShrinkingHeaderComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule
    ]
})
export class AppModule { }
