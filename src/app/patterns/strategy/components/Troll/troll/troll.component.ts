import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-troll',
  templateUrl: './troll.component.html',
  styleUrls: ['./troll.component.css']
})
export class TrollComponent implements OnInit {

  @Input('data') data: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
