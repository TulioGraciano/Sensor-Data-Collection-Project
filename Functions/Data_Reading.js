
import { Params } from "./configs.js";
// Function to read data and classify it into alert, normal, and critical categories based on temperature and pressure thresholds
export function ReadData(readings){
    //Process Control Parameters
    let cont = 0;
    let alert = 0;
    let normal=0;
    let critical=0;
    let tempAlert = [];
    let pressAlert = [];
    let tempCritical = [];
    let pressCritical = [];
    for(let i = 0; i < readings.length; i++){
        if(readings[i].temperatura <Params.TempMinAllowed || readings[i].pressao <Params.PressMinAllowed){
                alert++;
                if(readings[i].temperatura <Params.TempMinAllowed){
                    tempAlert.push({Temperature: readings[i].temperatura, Timestamp: readings[i].timestamp});
                }else{
                    pressAlert.push({Pressure: readings[i].pressao, Timestamp: readings[i].timestamp});
                }
        } else if((readings[i].temperatura >Params.TempMinAllowed && readings[i].temperatura <Params.TempMaxAllowed && readings[i].pressao >Params.PressMinAllowed && readings[i].pressao <Params.PressMaxAllowed)){
                    normal++;

        } else{
                critical++;
                if(readings[i].temperatura > Params.TempMaxAllowed){
                    tempCritical.push({Temperature: readings[i].temperatura, Timestamp: readings    [i].timestamp});
                }else{
                    pressCritical.push({Pressure: readings[i].pressao, Timestamp: readings[i].timestamp});
                }

        }
        }
        

    return {
        Total: readings.length,
        geral:{alert: alert, normal: normal, critical: critical},
        porTipo:{tempAlert,pressAlert,tempCritical,pressCritical}
    };
}



