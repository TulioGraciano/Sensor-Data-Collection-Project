import fs from 'fs/promises';
//Function to read data from a JSON file and return it as a JavaScript object.
export async function GetData(){
    try{
        const data = await fs.readFile('./Functions/data.json', 'utf8');
        return JSON.parse(data);
    }
    catch(error){
        console.error("Erro encontrado ao ler o arquivo de dados");
        process.exit(1)

    }
};
