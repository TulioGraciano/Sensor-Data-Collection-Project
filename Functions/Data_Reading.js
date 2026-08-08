
// Function to read data and classify it into alert, normal, and critical categories based on temperature and pressure thresholds
function ReadData(data){
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
    for(let i = 0; i < data.length; i++){
        switch(true){
            case (data[i].temperatura <TempMinAllowed || data[i].pressao <PressMinAllowed):
                alert++;
                if(data[i].temperatura <TempMinAllowed){
                    tempAlert.push({Temperature: data[i].temperatura, Timestamp: data[i].timestamp});
                }else{
                    pressAlert.push({Pressure: data[i].pressao, Timestamp: data[i].timestamp});
                }
                break;
            case (data[i].temperatura >TempMinAllowed && data[i].temperatura <TempMaxAllowed && data[i].pressao >PressMinAllowed && data[i].pressao <PressMaxAllowed):
                normal++;
                break;
            case (data[i].temperatura >TempMaxAllowed || data[i].pressao >PressMaxAllowed):
                critical++;
                if(data[i].temperatura >TempMaxAllowed){
                    tempCritical.push({Temperature: data[i].temperatura, Timestamp: data[i].timestamp});
                }else{
                    pressCritical.push({Pressure: data[i].pressao, Timestamp: data[i].timestamp});
                }
                break;
        }
        
}
    return {
        geral:{alert: alert, normal: normal, critical: critical},
        porTipo:{tempAlert,pressAlert,tempCritical,pressCritical}
    };
};


