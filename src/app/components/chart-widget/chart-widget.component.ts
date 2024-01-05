import { Component, Input } from '@angular/core';
import { ExpensesChartComponent } from '../expenses-chart/expenses-chart.component';
import { SalesComparisionChartComponent } from '../sales-comparision-chart/sales-comparision-chart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chart-widget',
  standalone: true,
  imports: [ExpensesChartComponent, SalesComparisionChartComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './chart-widget.component.html',
  styleUrl: './chart-widget.component.scss'
})
export class ChartWidgetComponent {

  @Input() chartType = '1';
  @Input() title = 'Chart Data';
  @Input() cycle = '0';

  items = [
    { label: 'Select', value: '0' },
    { label: 'Monthly', value: '1' },
    { label: 'Quaterly', value: '2' },
    { label: 'Yearly', value: '3' },
  ];

}
