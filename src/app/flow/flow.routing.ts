import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlowComponent } from './flow.component';

export const flowRoutes: Routes = [
    {
        path: 'flow',
        component: FlowComponent,
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(flowRoutes);