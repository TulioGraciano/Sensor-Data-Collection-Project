import {GetData} from './Functions/Get_Data.js';
import {ReadData} from './Functions/Data_Reading.js';

const readings = await GetData();
const result = ReadData(readings);
console.log(result);