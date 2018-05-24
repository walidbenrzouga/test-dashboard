import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RapportComponent } from './rapport.component';

export const rapportRoutes: Routes = [
    {
        path: 'rapport',
        component: RapportComponent,
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(rapportRoutes);