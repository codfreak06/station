import {Component, OnInit, ViewChild} from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";
import {ServiceService} from "./service/service.service";
import {map, Subscription, switchMap, timer} from 'rxjs';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit{
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
temp:number[]
  hum:number[]
  subscription !: Subscription;
  constructor(private serviceService: ServiceService) {




    /*this.chartOptions = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      chart: {
        height: 350,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };*/
  }

  ngOnInit(): void {

    this.subscription = timer(0, 60000).pipe(
      map(() => {
        this.serviceService.getLaboratory().subscribe((res)=>{
            this.hum=res[res.length-1].humidity
            this.temp=res[res.length-1].temperature
          this.chartOptions = {
            series: [
              {
                name: "Temperature",
                data: res.map((val)=>val.temperature)
              },
              {
                name: "Humidity",
                data:res.map((val)=>val.humidity)
              }
            ],
            chart: {
              height: 350,
              type: "area"
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: "smooth"
            },
            xaxis: {
              type: "datetime",
              categories: res.map((val)=>val.createdAt)
            },
            tooltip: {
              x: {
                format: "dd/MM/yy HH:mm"
              }
            }
          };
          console.log(Number(res.map((val)=>val.temperature)))
        })
      })
    ).subscribe();
        }


}
