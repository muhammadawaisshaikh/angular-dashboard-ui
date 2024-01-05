import { Component } from '@angular/core';
import { ROUTES } from '../../routes';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Route } from '../../interfaces/route.interface';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent {

  routes: Route[] = [
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

  yesterdayRoutes: Route[] = [
    {
      path: 'sell-goods',
      icon: '',
      name: 'Sale of goods'
    },
    {
      path: 'audience',
      icon: '',
      name: 'Audience'
    },
    {
      path: 'my-sells',
      icon: '',
      name: 'My Sells'
    }
  ]

  previousSevenRoutes: Route[] = [
    {
      path: 'sell-week',
      icon: '',
      name: 'Sell of week'
    },
    {
      path: 'sell-month',
      icon: '',
      name: 'Sell 12$ per month'
    }
  ]

  previousThirtyRoutes: Route[] = [
    {
      path: 'help-business',
      icon: '',
      name: 'Help for business'
    }
  ]

}
