import { RxjsComponent } from './rxjs/rxjs.component';
import { PromisesComponent } from './promises/promises.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Grafica1Component } from "./grafica1/grafica1.component";

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                data: {
                    title: 'Dashboard'
                }
            },
            {
                path: 'progress',
                component: ProgressComponent,
                data: {
                    title: 'Progress'
                }
            },
            {
                path: 'grafica1',
                component: Grafica1Component,
                data: {
                    title: 'Grafica'
                }
            },
            {
                path: 'account-settings',
                component: AccountSettingsComponent,
                data: {
                    title: 'Account Settings'
                }
            },
            {
                path: 'promises',
                component: PromisesComponent,
                data: {
                    title: 'Promesas'
                }
            },
            {
                path: 'rxjs',
                component: RxjsComponent,
                data: {
                    title: 'RXJS'
                }
            },
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
        ]
    },
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
