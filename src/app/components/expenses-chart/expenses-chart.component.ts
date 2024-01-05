import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-expenses-chart',
  standalone: true,
  imports: [],
  templateUrl: './expenses-chart.component.html',
  styleUrl: './expenses-chart.component.scss'
})
export class ExpensesChartComponent implements OnInit, OnDestroy {
  private chart: am4charts.XYChart = {} as am4charts.XYChart;

  constructor(private zone: NgZone) { }

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      am4core.useTheme(am4themes_animated);

      // Create chart instance
      this.chart = am4core.create('chartdiv', am4charts.XYChart);

      // Data array (replace this with your actual data)
      const chartData = [
        { date: new Date(2023, 0, 1), price1: 10 },
        { date: new Date(2023, 0, 2), price1: 120 },
        { date: new Date(2023, 0, 3), price1: 50 },
        { date: new Date(2023, 0, 4), price1: 200 },
        { date: new Date(2023, 0, 5), price1: 150 },
        { date: new Date(2023, 0, 6), price1: 20 },
        { date: new Date(2023, 0, 7), price1: 400 },
        { date: new Date(2023, 0, 8), price1: 350 },
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
      createSeries('price1', 'Price 1');

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
