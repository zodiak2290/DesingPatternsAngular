import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-queen',
  templateUrl: './queen.component.html',
  styleUrls: ['./queen.component.css']
})
export class QueenComponent implements OnInit {

  @Input('data') data: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
