
// Function to read data and classify it into alert, normal, and critical categories based on temperature and pressure thresholds
export function ReadData(readings){
    //Process Control Parameters
    let TempMinAllowed = 10;
    let TempMaxAllowed = 80;
    let PressMinAllowed = 980;
    let PressMaxAllowed = 1050;
    let cont = 0;
    let alert = 0;
    let normal=0;
    let critical=0;
    let tempAlert = [];
    let pressAlert = [];
    let tempCritical = [];
    let pressCritical = [];
    for(let i = 0; i < readings.length; i++){
        switch(true){
            case (readings[i].temperatura <TempMinAllowed || readings[i].pressao <PressMinAllowed):
                alert++;
                if(readings[i].temperatura <TempMinAllowed){
                    tempAlert.push({Temperature: readings[i].temperatura, Timestamp: readings[i].timestamp});
                }else{
                    pressAlert.push({Pressure: readings[i].pressao, Timestamp: readings[i].timestamp});
                }
                break;
            case (readings[i].temperatura >TempMinAllowed && readings[i].temperatura <TempMaxAllowed && readings[i].pressao >PressMinAllowed && readings[i].pressao <PressMaxAllowed):
                normal++;
                break;
            case (readings[i].temperatura >TempMaxAllowed || readings[i].pressao >PressMaxAllowed):
                critical++;
                if(readings[i].temperatura >TempMaxAllowed){
                    tempCritical.push({Temperature: readings[i].temperatura, Timestamp: readings    [i].timestamp});
                }else{
                    pressCritical.push({Pressure: readings[i].pressao, Timestamp: readings[i].timestamp});
                }
                break;
        }
        
}
    return {
        geral:{alert: alert, normal: normal, critical: critical},
        porTipo:{tempAlert,pressAlert,tempCritical,pressCritical}
    };
};


