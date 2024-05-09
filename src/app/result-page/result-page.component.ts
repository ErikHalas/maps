import {Component, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import {CanvasJS, CanvasJSAngularChartsModule} from '@canvasjs/angular-charts';

CanvasJS.addColorSet("greenShades",
  [
    "#9adea8",
    "#f3b2a6",
  ]);

@Component({
  selector: 'app-result-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CanvasJSAngularChartsModule
  ],
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss'],
})
export class ResultPageComponent {

  colorsArray= [
    '#B3E6FF',
    '#B8EBF5',
    '#E46026',
    '#C7488D',
    '#FFB400'];
  chartOptions = {
    colorSet: "greenShades",
    animationEnabled: true,
    title: {
      text: "Mate rakovinu?"
    },
    data: [{
      type: "doughnut",
      startAngle: -90,
      indexLabel: "{name}: {y}",
      yValueFormatString: "#,###.##'%'",
      dataPoints: [
        { y: 20, name: "nie" },
        { y: 80, name: "ano" },
      ]
    }]
  }
}
