import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  temperature() {
    document.getElementById('Value_L1').innerHTML = 'Temperature : 30.1';
    document.getElementById('Value_L2').innerHTML = 'Temperature : 30.2';
    document.getElementById('Value_L3').innerHTML = 'Temperature : 30.3';
    document.getElementById('Value_L4').innerHTML = 'Temperature : 30.4';
    document.getElementById('Value_L5').innerHTML = 'Temperature : 30.5';
    document.getElementById('Value_L6').innerHTML = 'Temperature : 30.6';
    document.getElementById('Value_L7').innerHTML = 'Temperature : 30.7';
    document.getElementById('Value_L8').innerHTML = 'Temperature : 30.8';
    document.getElementById('Value_L9').innerHTML = 'Temperature : 30.9';
    document.getElementById('Value_L10').innerHTML = 'Temperature : 30.10';

  }

  humidity() {
    document.getElementById('Value_L1').innerHTML = 'Humidity : 55.111';
    document.getElementById('Value_L2').innerHTML = 'Humidity : 55.222';
    document.getElementById('Value_L3').innerHTML = 'Humidity : 55.333';
    document.getElementById('Value_L4').innerHTML = 'Humidity : 55.444';
    document.getElementById('Value_L5').innerHTML = 'Humidity : 55.555';
    document.getElementById('Value_L6').innerHTML = 'Humidity : 55.666';
    document.getElementById('Value_L7').innerHTML = 'Humidity : 55.777';
    document.getElementById('Value_L8').innerHTML = 'Humidity : 55.888';
    document.getElementById('Value_L9').innerHTML = 'Humidity : 55.999';
    document.getElementById('Value_L10').innerHTML = 'Humidity : 55.101010';
  }

  pressure() {
    document.getElementById('Value_L1').innerHTML = 'Pressure : 99999.1';
    document.getElementById('Value_L2').innerHTML = 'Pressure : 99999.2';
    document.getElementById('Value_L3').innerHTML = 'Pressure : 99999.3';
    document.getElementById('Value_L4').innerHTML = 'Pressure : 99999.4';
    document.getElementById('Value_L5').innerHTML = 'Pressure : 99999.5';
    document.getElementById('Value_L6').innerHTML = 'Pressure : 99999.6';
    document.getElementById('Value_L7').innerHTML = 'Pressure : 99999.7';
    document.getElementById('Value_L8').innerHTML = 'Pressure : 99999.8';
    document.getElementById('Value_L9').innerHTML = 'Pressure : 99999.9';
    document.getElementById('Value_L10').innerHTML = 'Pressure : 99999.10';

  }

}
