export class Weather{
    location : string | undefined;
    temperature : number|string;
    min_tempratur: number|string;
    max_tempratur: number|string;
    humidity:number;
    constructor(userResonse:any){
        this.location = userResonse.name;
        this.temperature = (userResonse.main.temp-273.15).toFixed(2);
        this.min_tempratur = (userResonse.main.temp_min-273.15).toFixed(2);
        this.max_tempratur = (userResonse.main.temp_max-273.15).toFixed(2);
        this.humidity = userResonse.main.humidity;
    }
}