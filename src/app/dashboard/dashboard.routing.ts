import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AdvComponent } from './adv/adv.component';
import { DescComponent } from './desc/desc.component';
import { StaffComponent } from './staff/staff.component';
import { DocComponent } from './doc/doc.component';
import { ContactComponent } from './contact/contact.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ApoinComponent } from './apoin/apoin.component';
import { DeleveryManComponent } from './delevery-man/delevery-man.component';
import { PlanProjectComponent } from './plan-project/plan-project.component';
import { MeetingManComponent } from './meeting-man/meeting-man.component';

export const dashboardRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {
                path: 'description',
                component: DescComponent,
                pathMatch: 'full'
            },
            {
                path: 'staffing',
                component: StaffComponent,
                pathMatch: 'full'
            },
            {
                path: 'documents',
                component: DocComponent,
                pathMatch: 'full'
            },
            {
                path: 'advancement',
                component: AdvComponent,
                pathMatch: 'full'
            },
            {
                path: 'contact',
                component: ContactComponent,
                pathMatch: 'full'
            },
            {
                path: 'to-do',
                component: ToDoComponent,
                pathMatch: 'full'
            },
            {
                path: 'apointments',
                component: ApoinComponent,
                pathMatch: 'full'
            },
            {
                path: 'delevery-managments',
                component: DeleveryManComponent,
                pathMatch: 'full'
            },
            {
                path: 'planing-projects',
                component: PlanProjectComponent,
                pathMatch: 'full'
            },
            {
                path: 'meeting-managments',
                component: MeetingManComponent,
                pathMatch: 'full'
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(dashboardRoutes);