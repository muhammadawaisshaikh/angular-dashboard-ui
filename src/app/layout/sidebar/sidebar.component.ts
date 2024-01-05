import { Component } from '@angular/core';
import { ROUTES } from '../../routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  routes: any = [
    {
      path: ROUTES.MY_REPORTS,
      icon: 'bi bi-speedometer',
      name: 'Dashboard'
    },
    {
      path: ROUTES.ANALYTICS,
      icon: 'bi bi-pie-chart-fill',
      name: 'Analytics'
    },
    {
      path: ROUTES.AI_AUTOMATIONS,
      icon: 'bi bi-wechat',
      name: 'AI & Automations'
    }
  ]

}
