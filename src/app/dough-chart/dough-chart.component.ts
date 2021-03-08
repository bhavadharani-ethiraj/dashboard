import { Component, OnInit } from '@angular/core';
import * as chart from 'chart.js';

import 'chartjs-plugin-doughnutlabel';
@Component({
  selector: 'app-dough-chart',
  templateUrl: './dough-chart.component.html',
  styleUrls: ['./dough-chart.component.css']
})
export class DoughChartComponent implements OnInit {
   public percent=80;
    public color="#4048CC";
 
  public canvasName="doughnutchart";
    constructor() { }

  ngOnInit(): void {
    this.createChart()
 

  }
  createChart(){
    var ref = <HTMLCanvasElement>document.getElementById(this.canvasName)
    var ctx:any = ref.getContext('2d')
    const mychart = new chart(ctx,{
      type:'doughnut',
      data:{
        datasets:[
          {
            data:[this.percent , 100-this.percent],
            backgroundColor:[this.color],
            borderWidth:0
          }
        ]
      },
      options:{
        cutoutPercentage:86,
        responsive:false,
        
  plugins: {
  
    doughnutlabel: {
      labels: [
        {
        text: this.percent+"%",
        font: {
          size: 20,
          weight: 'bold'
        }
      }, ]
    }
      }
    }
  })
   

}
}
