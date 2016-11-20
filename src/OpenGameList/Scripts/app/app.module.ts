///<reference path="../../typings/index.d.ts" />
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import "rxjs/Rx";

// components
import {AboutComponent} from "./about.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home.component";
import {ItemService} from "./item.service";
import {ItemListComponent} from "./item-list.component";
import {ItemDetailComponent} from "./item-detail.component";
import {LoginComponent} from "./login.component";
import {PageNotFoundComponent} from "./page-not-found.component";

// other
import {AppRouting} from "./app.routing";

@NgModule({
    // directives, components, and pipes
    declarations: [
        AboutComponent,
        AppComponent,
        HomeComponent,
        ItemDetailComponent,
        ItemListComponent,
        LoginComponent,
        PageNotFoundComponent
    ],
    // modules
    imports: [
        AppRouting,
        BrowserModule,
        FormsModule,
        HttpModule,     
        RouterModule,        
    ],
    providers: [
        ItemService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }