import { Component, Input, OnChanges } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnChanges{

  @Input() title: string = 'Sin Titulo';

  @Input() labels: string[] = ['Label 1', 'Label 2', 'Label 3' ];

  @Input() dataset: number[] = [10, 10, 10]

  //public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: [
      { 
        //data: [ 350, 450, 100 ],
        data: this.dataset,
        backgroundColor: ['#9E120E', '#FF5800', '#FFB414']
      },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  

  ngOnChanges(){
    this.doughnutChartData = {
      labels: this.labels,
      datasets: [{ data: this.dataset }],
    };
  } 

}
