import {GetData} from './Functions/Get_Data.js';
import {ReadData} from './Functions/Data_Reading.js';
import {Report} from './Functions/Report.js';

const readings = await GetData();
const result = ReadData(readings);
const report = Report(readings, result);