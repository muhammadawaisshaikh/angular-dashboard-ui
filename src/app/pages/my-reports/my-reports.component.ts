import { Component } from '@angular/core';
import { ChartWidgetComponent } from '../../components/chart-widget/chart-widget.component';

@Component({
  selector: 'app-my-reports',
  standalone: true,
  imports: [ChartWidgetComponent],
  templateUrl: './my-reports.component.html',
  styleUrl: './my-reports.component.scss'
})
export class MyReportsComponent {

}
