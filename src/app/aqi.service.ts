import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Station } from './station.model';

@Injectable({
  providedIn: 'root'
})
export class AqiService {

  city:string=""
  listStation:Station[]=[]
  httpClient:HttpClient
  constructor(httpClient:HttpClient) {
    this.httpClient=httpClient
  }

  async getstations(city:string){
    const response= await this.getstationsRequest(city)
    this.listStation=response.data.data
  }

  async getstationsRequest(city:any){
    const data = await this.httpClient.get("http://localhost:4001/aqi/"+city).toPromise();
    const json = JSON.parse(JSON.stringify(data))
    console.log({status:json["status"],message:json["message"],data:json["data"]})
    return {status:json["status"],message:json["message"],data:json["data"]}
    
  }
}
