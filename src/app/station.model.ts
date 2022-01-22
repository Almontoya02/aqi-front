import { Data } from "./data.model";

export class Station {
    constructor(
        public uid: number,
        public aqi:number,
        public time: object,
        public station: Data,
    ){

    } 
}
