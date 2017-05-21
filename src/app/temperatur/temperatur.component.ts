import { Component, Input } from '@angular/core';

@Component({
  selector: 'widget-temperatur',
  templateUrl: './temperatur.component.html',
  styleUrls: ['./temperatur.component.css']
})
export class TemperaturComponent{

  @Input('air-temp')
  public airTemperature: number;

  @Input('water-temp')
  public waterTemperature: number;

}
