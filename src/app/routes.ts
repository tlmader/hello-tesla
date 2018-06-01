import { DashboardPageComponent } from './containers/dashboard-page/dashboard-page.component';

export const routes = [
  {
    path: 'dashboard',
    component: DashboardPageComponent,
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];
