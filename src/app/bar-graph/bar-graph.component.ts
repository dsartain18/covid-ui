import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

// https://www.ngdevelop.tech/how-to-use-ngx-charts-in-angular/

  salesData = [
    {name: "Mobiles", value:105000},
    {name: "Laptop", value:55000 },
    {name: "AC", value:15000 },
    {name: "Headset", value:150000 },
    {name: "Fridge", value:20000 }
  ]

}
