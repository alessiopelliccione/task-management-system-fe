import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ManagementComponent } from './features/management/management.component';
import { NewTaskComponent } from './features/management/new-task/new-task.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'management',
        component: ManagementComponent,
    },
    {
        path: 'task/new',
        component: NewTaskComponent,
    }
];
