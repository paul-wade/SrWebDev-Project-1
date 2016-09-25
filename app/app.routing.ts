import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {registerComponent} from "./register.component";
import {eventListComponent} from "./event-list.component";

const appRoutes: Routes = [
    {path: 'register', component: registerComponent},
    {path: 'event-list', component: eventListComponent},
    {
        path: '',
        redirectTo: '/event-list',
        pathMatch: 'full'
    },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);