import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.css']
})
export class VisualizeComponent implements OnInit {
  constructor() { }

  value1: number;
  value2: number;
  value3: number;
  value4: number;
  value5: number;
  value6: number;
  value7: number;
  value8: number;
  value9: number;
  unit: string;
  progessValue: number;
  ngOnInit() {

    this.temperature();
  }
  temperature() {
    this.unit = 'Temperature : ';
    this.value1 = 30.5;
    this.value2 = 30.6;
    this.progessValue = 99;
  }

  humidity() {
    this.unit = 'Humidity : ';
    this.value1 = 55.5;
    this.value2 = 55.6;
  }

  pressure() {
    this.unit = 'Pressure : ';
    this.value1 = 999.5;
    this.value2 = 999.6;

  }


}
