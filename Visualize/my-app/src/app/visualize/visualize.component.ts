import { Component, OnInit } from '@angular/core';
import {VisualizeTemperature} from './visualize.temperature';
import {VisualizeHumidity} from './visualize.humidity';



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
  value10: number;
  unit: string;
  running: string;

  temperatureHistory: number[10][20];

  // Data inject
  visualizeTemperature: VisualizeTemperature[];
  visualizeHumidity: VisualizeHumidity[];
  ngOnInit() {
    this.sleep(3000).then(() => {
      this.temperature();
    });
  }

  newHistory(){
    return [
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0]
    ]
  }

  onTemperatureClicked() {
    this.running = 'temperature';
    this.temperature = newHistory();
    this.temperature();
  }
  onPressureClicked() {
    this.running = 'pressure';
    this.pressure();
  }
  onHumidityClicked() {
    this.running = 'humidity';
    this.humidity();
  }

  temperature() {
    if (this.running === 'temperature') {
      this.visualizeTemperature = JSON.parse(sessionStorage.getItem('temperature'));
      this.unit = 'Temperature : ';
      this.sleep(500).then(() => {
        this.value1 = this.visualizeTemperature['LATTE-001'].temperature;
        this.value2 = this.visualizeTemperature['LATTE-002'].temperature;
        this.value3 = this.visualizeTemperature['LATTE-003'].temperature;
        this.value4 = this.visualizeTemperature['LATTE-004'].temperature;
        this.value5 = this.visualizeTemperature['LATTE-005'].temperature;
        this.value6 = this.visualizeTemperature['LATTE-006'].temperature;
        this.value7 = this.visualizeTemperature['LATTE-007'].temperature;
        this.value8 = this.visualizeTemperature['LATTE-008'].temperature;
        this.value9 = this.visualizeTemperature['LATTE-009'].temperature;
        this.value10 = this.visualizeTemperature['LATTE-010'].temperature;
        console.log(this.visualizeTemperature['LATTE-001'].temperature);

        this.temperature[0].push(this.value1);

        this.temperature();
      });
    }
  }

  humidity() {
    if (this.running === 'humidity') {
      this.visualizeHumidity = JSON.parse(sessionStorage.getItem('humidity'));
      this.unit = 'Humidity : ';
      this.sleep(500).then(() => {
        this.value1 = this.visualizeHumidity['LATTE-001'].humidity;
        this.value2 = this.visualizeHumidity['LATTE-002'].humidity;
        this.value3 = this.visualizeHumidity['LATTE-003'].humidity;
        this.value4 = this.visualizeHumidity['LATTE-004'].humidity;
        this.value5 = this.visualizeHumidity['LATTE-005'].humidity;
        this.value6 = this.visualizeHumidity['LATTE-006'].humidity;
        this.value7 = this.visualizeHumidity['LATTE-007'].humidity;
        this.value8 = this.visualizeHumidity['LATTE-008'].humidity;
        this.value9 = this.visualizeHumidity['LATTE-009'].humidity;
        this.value10 = this.visualizeHumidity['LATTE-010'].humidity;
        console.log(this.visualizeHumidity['LATTE-001'].humidity);
        this.humidity();
      });
    }
  }

  pressure() {
    this.unit = 'Pressure : ';
    this.value1 = 999.5;
    this.value2 = 999.6;

  }

  sleep(time) {
    return new Promise((resolve => setTimeout(resolve, time)));
  }

}
