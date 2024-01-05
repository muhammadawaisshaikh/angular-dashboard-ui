import { Routes } from '@angular/router';
import { ROUTES } from './routes';

export const routes: Routes = [
    {
        path: ROUTES.ROOT,
        loadComponent: ()=> import('./pages/my-reports/my-reports.component').then(c => c.MyReportsComponent)
    },
    {
        path: ROUTES.MY_REPORTS,
        loadComponent: ()=> import('./pages/my-reports/my-reports.component').then(c => c.MyReportsComponent)
    },
    {
        path: ROUTES.AI_AUTOMATIONS,
        loadComponent: ()=> import('./pages/ai-automations/ai-automations.component').then(c => c.AiAutomationsComponent)
    },
    {
        path: ROUTES.ANALYTICS,
        loadComponent: ()=> import('./pages/analytics/analytics.component').then(c => c.AnalyticsComponent)
    }
];
