import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {registerComponent} from "./register/register.component";
import {eventListComponent} from "./event-list/event-list.component";
import {routing, appRoutingProviders} from "./app.routing";
import {navbarComponent} from "./navbar/navbar.component";
import {FormsModule} from "@angular/forms";
@NgModule({
    imports: [BrowserModule, FormsModule, routing],
    declarations: [AppComponent, registerComponent, eventListComponent, navbarComponent],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
