import * as request from 'request'
import { Weather } from './data';
export class weatherApiRequest{ 
    getLocationInfo(Location:string,cb:(user:Weather)=>any){
        request.get('https://api.openweathermap.org/data/2.5/weather?q='+Location+'&appid=3c9b5528d9bc76f08d72ce2465ebd952',(error:any,response:any,body:any)=>{

            const data = JSON.parse(body)
            let user  = new Weather(data)
            cb(user)
        })
    }
} 
