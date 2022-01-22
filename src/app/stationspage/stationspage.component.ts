import { Component, OnInit } from '@angular/core';
import { AqiService } from '../aqi.service';

@Component({
  selector: 'app-stationspage',
  templateUrl: './stationspage.component.html',
  styleUrls: ['./stationspage.component.css']
})
export class StationspageComponent implements OnInit {


  aqiService:AqiService
  constructor(aqiService:AqiService) { 
    this.aqiService=aqiService
  }

  ngOnInit(): void {
    this.aqiService.getstations(this.aqiService.city)
  }

  castAqiColor(aqi:any){
    try {
      let dato = parseInt(aqi)
      if(0<=dato && dato<=50){
        return "green"
      }
      if(51<=dato && dato<=100){
        return "yellow"
      }
      if(101<=dato && dato<=150){
        return "orange"
      }
      if(151<=dato && dato<=200){
        return "red"
      }
      if(201<=dato && dato<=300){
        return "violet"
      }
      if(201<=dato && dato<=300){
        return "dark violet"
      }else{
        return "default"
      }
    } catch (error) {
      return "default"
    }
 

  }

}
