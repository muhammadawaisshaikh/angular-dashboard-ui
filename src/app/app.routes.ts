import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: ()=> import('./pages/my-reports/my-reports.component').then(c => c.MyReportsComponent)
    },
    {
        path: 'my-reports',
        loadComponent: ()=> import('./pages/my-reports/my-reports.component').then(c => c.MyReportsComponent)
    },
    {
        path: 'ai-automation',
        loadComponent: ()=> import('./pages/ai-automations/ai-automations.component').then(c => c.AiAutomationsComponent)
    }
];
