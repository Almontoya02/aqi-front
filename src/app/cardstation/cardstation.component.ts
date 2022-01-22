import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cardstation',
  templateUrl: './cardstation.component.html',
  styleUrls: ['./cardstation.component.css']
})
export class CardstationComponent implements OnInit {

  @Input() color:any | undefined
  @Input() Aqi:any | undefined
  @Input() id:any | undefined
  @Input() name:any | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
