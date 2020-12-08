import { Weather } from './data';
import {weatherApiRequest} from './weatherApiRequest';
let svc = new weatherApiRequest
let Location = process.argv[2]
svc.getLocationInfo(Location,(user:Weather)=>{
    console.log(user)
});