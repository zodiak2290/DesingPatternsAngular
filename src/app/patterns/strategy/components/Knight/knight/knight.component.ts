import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-knight',
  templateUrl: './knight.component.html',
  styleUrls: ['./knight.component.css']
})
export class KnightComponent implements OnInit {

  @Input('data') data: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
