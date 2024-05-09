import {Component, Input, ViewChild} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import { RouterOutlet } from '@angular/router';

import {CanvasJS, CanvasJSAngularChartsModule} from '@canvasjs/angular-charts';
import {ResultPageService} from "../services/result-page.service";

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
  results: Results = new Results();
  constructor(public resultPageService: ResultPageService) {

  }
  colorsArray= [
    '#B3E6FF',
    '#B8EBF5',
    '#E46026',
    '#C7488D',
    '#FFB400'];
  // @ts-ignore
  chartOptions = {
    backgroundColor: "",
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
        { y: 100-(this.resultPageService.getResults().accuracy ?? 0), name: "nie" },
        { y: this.resultPageService.getResults().accuracy ?? 100, name: "ano" },
      ]
    }]
  }
}

export class Results {
  message: string | undefined
  result: boolean | undefined
  accuracy: number | undefined
}
