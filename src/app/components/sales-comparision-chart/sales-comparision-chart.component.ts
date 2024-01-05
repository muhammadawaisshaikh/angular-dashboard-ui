import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-sales-comparision-chart',
  standalone: true,
  imports: [],
  templateUrl: './sales-comparision-chart.component.html',
  styleUrl: './sales-comparision-chart.component.scss'
})
export class SalesComparisionChartComponent implements OnInit, OnDestroy {
  private chart: am4charts.XYChart = {} as am4charts.XYChart;

  constructor(private zone: NgZone) { }

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      am4core.useTheme(am4themes_animated);

      // Create chart instance
      this.chart = am4core.create('chartSalesDiv', am4charts.XYChart);

      // Data array (replace this with your actual data)
      const chartData = [
        { date: new Date(2023, 0, 1), price1: 10, price2: 20, price3: 30 },
        { date: new Date(2023, 0, 2), price1: 20, price2: 30, price3: 40 },
        { date: new Date(2023, 0, 3), price1: 12, price2: 25, price3: 35 },
        { date: new Date(2023, 0, 4), price1: 35, price2: 40, price3: 55 },
        { date: new Date(2023, 0, 5), price1: 30, price2: 35, price3: 45 },
        { date: new Date(2023, 0, 6), price1: 40, price2: 55, price3: 65 },
        { date: new Date(2023, 0, 7), price1: 35, price2: 50, price3: 60 },
      ];

      // Set data for the chart
      this.chart.data = chartData;

      // Create axes
      const dateAxis = this.chart.xAxes.push(new am4charts.DateAxis());
      const valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());

      // Create series for each price
      const createSeries = (field: string, name: string) => {
        const series = this.chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = 'date';
        series.dataFields.valueY = field;
        series.name = name;
        series.tooltipText = '{name}: [bold]{valueY}[/]';
        series.strokeWidth = 2;

        // Use LineSeries3D for a smoothed line chart
        series.tensionX = 0.8;
        series.tensionY = 0.8;

        return series;
      };

      // Add series for each price
      createSeries('price1', 'Sales');
      createSeries('price2', 'Profit');
      createSeries('price3', 'Revenue');

      // Add cursor
      this.chart.cursor = new am4charts.XYCursor();

      // Add legend
      this.chart.legend = new am4charts.Legend();
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
