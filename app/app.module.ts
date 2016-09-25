import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {registerComponent} from "./register.component";
import {eventListComponent} from "./event-list.component";
import {routing, appRoutingProviders, registerComponent} from "./app.routing";
import {navbarComponent} from "./navbar.component";
@NgModule({
    imports: [BrowserModule, routing],
    declarations: [AppComponent, registerComponent, eventListComponent, navbarComponent],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
