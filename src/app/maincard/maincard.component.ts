import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-maincard',
  templateUrl: './maincard.component.html',
  styleUrls: ['./maincard.component.css']
})
export class MaincardComponent implements OnInit {

  @Input() city:string | undefined
  @Input() image:string | undefined
  @Output() buttonSelected: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onSelectBtn(){
    this.buttonSelected?.emit()
  }
}
