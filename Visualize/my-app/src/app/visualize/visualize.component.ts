import {Component, OnInit} from '@angular/core';
import {VisualizeTemperature} from './visualize.temperature';
import {VisualizeHumidity} from './visualize.humidity';
import {VisualizePressure} from './visualize.pressure';
import {templateJitUrl} from '@angular/compiler';


@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.css']
})
export class VisualizeComponent implements OnInit {
  constructor() {
  }

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
  humidityValue: number;
  humidityPercen: number;
  pressureValue: number;
  pressurePercen: number;
  running: string;
  averageTemp:number[];

  temperatureHistory: number[][];

  // Data inject
  visualizeTemperature: VisualizeTemperature[];
  visualizeHumidity: VisualizeHumidity[];
  visualizePressure: VisualizePressure[];

  ngOnInit() {
    this.sleep(3000).then(() => {
      this.temperature();
    });
  }

  newHistory() {
    return [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
  }

  onTemperatureClicked() {
    this.temperatureHistory = this.newHistory();
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
        // console.log(this.visualizeTemperature['LATTE-001'].temperature);
        this.progessValue = this.value1;
        this.progessPercen = ((this.progessValue + 20) / 80) * 100;

        for(let i = 0; i < 10; i++) {
          if (this.temperatureHistory[i].length >= 10) {
            this.temperatureHistory[i].shift();
          }
        }
        this.temperatureHistory[0].push(this.value1);
        this.temperatureHistory[1].push(this.value2);
        // console.log("lenght: " + this.temperatureHistory[1].length);
        // console.log("history: " + this.temperatureHistory[1]);
        this.temperatureHistory[2].push(this.value3);
        // console.log("lenght: " + this.temperatureHistory[2].length);
        // console.log("history: " + this.temperatureHistory[2]);
        this.temperatureHistory[3].push(this.value4);
        // console.log("lenght: " + this.temperatureHistory[3].length);
        // console.log("history: " + this.temperatureHistory[3]);
        this.temperatureHistory[4].push(this.value5);
        // console.log("lenght: " + this.temperatureHistory[4].length);
        // console.log("history: " + this.temperatureHistory[4]);
        this.temperatureHistory[5].push(this.value6);
        // console.log("lenght: " + this.temperatureHistory[5].length);
        // console.log("history: " + this.temperatureHistory[5]);
        this.temperatureHistory[6].push(this.value7);
        // console.log("lenght: " + this.temperatureHistory[6].length);
        // console.log("history: " + this.temperatureHistory[6]);
        this.temperatureHistory[7].push(this.value8);
        // console.log("lenght: " + this.temperatureHistory[7].length);
        // console.log("history: " + this.temperatureHistory[7]);
        this.temperatureHistory[8].push(this.value9);
        // console.log("lenght: " + this.temperatureHistory[8].length);
        // console.log("history: " + this.temperatureHistory[8]);
        this.temperatureHistory[9].push(this.value10);
        // console.log("lenght: " + this.temperatureHistory[9].length);
        // console.log("history: " + this.temperatureHistory[9]);

        this.averageTemp = [0,0,0,0,0,0,0,0,0,0];

        for(let i = 0; i < 10; i++) {
          let sum = 0;
          for(let j = 0; j < 10; j++) {
            sum += this.temperatureHistory[i][j];
          }
          this.averageTemp[i] = sum/10;
          console.log('average ' + i + ': ' + this.averageTemp[i]);
        }

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
        // console.log(this.visualizeHumidity['LATTE-001'].humidity);
        this.unit = 'Humidity : ';
        this.humidityValue = this.value1;
        this.humidityPercen = ((this.humidityValue - 20) / 80) * 100;
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
        // console.log(this.visualizePressure['LATTE-001'].pressure);
        this.pressureValue = this.value1;
        this.pressurePercen = ((this.progessValue - 8000) / 10000) * 100;
        this.pressure();
      });
    }


  }

  sleep(time) {
    return new Promise((resolve => setTimeout(resolve, time)));
  }

}
