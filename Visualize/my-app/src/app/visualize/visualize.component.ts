import { Component, OnInit } from '@angular/core';
import {VisualizeTemperature} from './visualize.temperature';
import {VisualizeHumidity} from './visualize.humidity';
import {VisualizePressure} from './visualize.pressure';



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
  progessValue: number;
  progessPercen: number;

  progessPercen2: number;
  progessPercen3: number;
  progessPercen4: number;
  progessPercen5: number;
  progessPercen6: number;
  progessPercen7: number;
  progessPercen8: number;
  progessPercen9: number;
  progessPercen10: number;

  humidityValue: number;

  pressureValue: number;
  pressurePercen: number;
  pressurePercen2: number;
  pressurePercen3: number;
  pressurePercen4: number;
  pressurePercen5: number;
  pressurePercen6: number;
  pressurePercen7: number;
  pressurePercen8: number;
  pressurePercen9: number;
  pressurePercen10: number;

  running: string;

  // Data inject
  visualizeTemperature: VisualizeTemperature[];
  visualizeHumidity: VisualizeHumidity[];
  visualizePressure: VisualizePressure[];
  ngOnInit() {
    this.sleep(3000).then(() => {
      this.onTemperatureClicked();
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
      this.progessValue = this.value1;
      this.progessPercen = ((this.progessValue + 20) / 80) * 100;
      this.progessPercen2 = ((this.value2 + 20) / 80) * 100;
      this.progessPercen3 = ((this.value3 + 20) / 80) * 100;
      this.progessPercen4 = ((this.value4 + 20) / 80) * 100;
      this.progessPercen5 = ((this.value5 + 20) / 80) * 100;
      this.progessPercen6 = ((this.value6 + 20) / 80) * 100;
      this.progessPercen7 = ((this.value7 + 20) / 80) * 100;
      this.progessPercen8 = ((this.value8 + 20) / 80) * 100;
      this.progessPercen9 = ((this.value9 + 20) / 80) * 100;
      this.progessPercen10 = ((this.value10 + 20) / 80) * 100;
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
        this.unit = 'Humidity : ';
        this.humidityValue = this.value1;
        this.progessPercen = ((this.humidityValue - 20) / 80) * 100;
        this.progessPercen2 = ((this.value2 - 20) / 80) * 100;
        this.progessPercen3 = ((this.value3 - 20) / 80) * 100;
        this.progessPercen4 = ((this.value4 - 20) / 80) * 100;
        this.progessPercen5 = ((this.value5 - 20) / 80) * 100;
        this.progessPercen6 = ((this.value6 - 20) / 80) * 100;
        this.progessPercen7 = ((this.value7 - 20) / 80) * 100;
        this.progessPercen8 = ((this.value8 - 20) / 80) * 100;
        this.progessPercen9 = ((this.value9 - 20) / 80) * 100;
        this.progessPercen10 = ((this.value10 - 20) / 80) * 100;
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
        this.pressureValue = this.value1;
        this.progessPercen = ((this.pressureValue - 8000) / 10000) * 100;
        this.progessPercen2 = ((this.value2 - 8000) / 10000) * 100;
        this.progessPercen3 = ((this.value3 - 8000) / 10000) * 100;
        this.progessPercen4 = ((this.value4 - 8000) / 10000) * 100;
        this.progessPercen5 = ((this.value5 - 8000) / 10000) * 100;
        this.progessPercen6 = ((this.value6 - 8000) / 10000) * 100;
        this.progessPercen7 = ((this.value7 - 8000) / 10000) * 100;
        this.progessPercen8 = ((this.value8 - 8000) / 10000) * 100;
        this.progessPercen9 = ((this.value9 - 8000) / 10000) * 100;
        this.progessPercen10 = ((this.value10 - 8000) / 10000) * 100;
        this.pressure();
      });
    }


  }
  sleep(time) {
    return new Promise((resolve => setTimeout(resolve, time)));
  }

}
