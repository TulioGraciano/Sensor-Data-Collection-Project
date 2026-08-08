import fs from 'fs/promises';
//Function to read data from a JSON file and return it as a JavaScript object.
async function GetData(){
const data = await fs.readFile('./Functions/data.json', 'utf8');
return JSON.parse(data);
}

const readings = await GetData();