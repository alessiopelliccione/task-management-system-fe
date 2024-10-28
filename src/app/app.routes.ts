import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ManagementComponent } from './features/management/management.component';
import { NewTaskComponent } from './features/management/new-task/new-task.component';
import { LoginComponent } from './features/login/login.component';
import { AuthGuardService } from './auth/auth-guard/auth-guard.service';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'management',
        component: ManagementComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'task/new',
        component: NewTaskComponent,
        canActivate: [AuthGuardService]
    }
];
