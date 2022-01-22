import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { AqiService } from '../aqi.service';

@Component({
  selector: 'app-mainapp',
  templateUrl: './mainapp.component.html',
  styleUrls: ['./mainapp.component.css']
})
export class MainappComponent implements OnInit {

  router:Router
  aqiservice:AqiService
  constructor(  router:Router,aqiservice:AqiService) { 
    this.aqiservice=aqiservice
    this.router=router
  }

  ngOnInit(): void {
  }

  gotoStationsPage(city:any){
    this.aqiservice.city=city
    console.log("INFOOOOOOOOOO:",this.aqiservice.city)
    this.router.navigateByUrl('/stations');
    
  }

}
