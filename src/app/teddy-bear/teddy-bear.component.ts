import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'widget-teddy-bear',
  templateUrl: './teddy-bear.component.html',
  styleUrls: ['./teddy-bear.component.css']
})
export class TeddyBearComponent implements OnInit {

  constructor() { }

  @Input()
  public followers:number;

  @Input()
  public following:number;

  ngOnInit() {
  }

}
