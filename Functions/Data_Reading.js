let data = [
    { "id": 1, "timestamp": "2026-08-06T08:00:00", "temperatura": 18.2, "pressao": 1015.3 },
    { "id": 2, "timestamp": "2026-08-06T09:00:00", "temperatura": 19.4, "pressao": 1014.8 },
    { "id": 3, "timestamp": "2026-08-06T10:00:00", "temperatura": 21.0, "pressao": 1013.9 },
    { "id": 4, "timestamp": "2026-08-06T11:00:00", "temperatura": 23.5, "pressao": 1012.7 },
    { "id": 5, "timestamp": "2026-08-06T12:00:00", "temperatura": 25.8, "pressao": 1011.5 },
    { "id": 6, "timestamp": "2026-08-06T13:00:00", "temperatura": 27.1, "pressao": 1010.2 },
    { "id": 7, "timestamp": "2026-08-06T14:00:00", "temperatura": 26.4, "pressao": 1010.8 },
    { "id": 8, "timestamp": "2026-08-06T15:00:00", "temperatura": 24.9, "pressao": 1011.9 },
    { "id": 9, "timestamp": "2026-08-06T16:00:00", "temperatura": 22.3, "pressao": 1013.1 },
    { "id": 10, "timestamp": "2026-08-06T17:00:00", "temperatura": 20.1, "pressao": 1014.6 },
    { "id": 11, "timestamp": "2026-08-06T18:00:00", "temperatura": 18.7, "pressao": 1015.9 },
    { "id": 12, "timestamp": "2026-08-06T19:00:00", "temperatura": 7.2, "pressao": 1016.7 }
]
//Process Control Parameters
    let TempMinAllowed = 10;
    let TempMaxAllowed = 80;
   
function ReadData(data){
    let cont = 0;
    let alert = 0;
    let normal=0;
    let critical=0;

    for(let i = 0; i < data.length; i++){
        switch(true){
            case (data[i].temperatura <TempMinAllowed):
                alert++;
                break;
            case (data[i].temperatura >TempMinAllowed && data[i].temperatura <TempMaxAllowed):
                normal++;
                break;
            case (data[i].temperatura >TempMaxAllowed):
                critical++;
                break;
        }
        
}
    return {alert: alert, normal: normal, critical: critical};
}

console.log(ReadData(data));


