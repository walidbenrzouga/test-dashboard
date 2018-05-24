import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'flow',
        loadChildren: 'app/flow/flow.module#FlowModule'
    },
    {
        path: 'rapport',
        loadChildren: 'app/rapport/rapport.module#RapportModule'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);