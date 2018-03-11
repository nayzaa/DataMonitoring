import { Component, OnInit } from '@angular/core';
import {VisualizeTemperature} from './visualize.temperature';
import {VisualizeHumidity} from './visualize.humidity';
import {VisualizePressure} from "./visualize.pressure";



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

  // Data inject
  visualizeTemperature: VisualizeTemperature[];
  visualizeHumidity: VisualizeHumidity[];
  visualizePressure: VisualizePressure[];
  ngOnInit() {
    this.sleep(3000).then(() => {
      this.temperature();
    });
  }

  onTemperatureClicked() {
    this.running = 'temperature';
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
    if (this.running === 'pressure') {
      this.visualizePressure = JSON.parse(sessionStorage.getItem('pressure'));
      this.unit = 'Pressure : ';
      this.sleep(500).then(() => {
        this.value1 = this.visualizePressure['LATTE-001'].pressure;
        this.value2 = this.visualizePressure['LATTE-002'].pressure;
        this.value3 = this.visualizePressure['LATTE-003'].pressure;
        this.value4 = this.visualizePressure['LATTE-004'].pressure;
        this.value5 = this.visualizePressure['LATTE-005'].pressure;
        this.value6 = this.visualizePressure['LATTE-006'].pressure;
        this.value7 = this.visualizePressure['LATTE-007'].pressure;
        this.value8 = this.visualizePressure['LATTE-008'].pressure;
        this.value9 = this.visualizePressure['LATTE-009'].pressure;
        this.value10 = this.visualizePressure['LATTE-010'].pressure;
        console.log(this.visualizePressure['LATTE-001'].pressure);
        this.pressure();
      });
    }

  }

  sleep(time) {
    return new Promise((resolve => setTimeout(resolve, time)));
  }

}
